var offlineCache = function() {
	var _cache = window.applicationCache;
	var _nav = window.navigator;
	var _db = window.openDatabase;
	var _con = console;
	
	var core = this;
	
	if (_con) {
		if (!_cache) _con.log('local cache not available');
		if (!_nav) _con.log('window.navigator not available');
		if (!_db) _con.log('local db not available');
	} else {
		if (!_cache) alert('local cache not available');
		if (!_nav) alert('window.navigator not available');
		if (!_db) alert('local db not available');
	}
	
	this.connStatus = function () {
		if ( _nav.onLine) {
			return "online";
		} else {
			return "offline";
		}
	}
	this.cache = {
		status: function() {
			switch(_cache.status) {
				case 0:
					return "not in use";
				case 1:
					return "doing nothing";
				case 2:
					return "looking for updates";
				case 3:
					return "downloading updates";
				case 4:
					return "an update is available";
				case 5:
					return "it is old and obsolete";
			}
		}
	}
	core.paramsToString = function (arr, quoted, glue) {
		var str = "";
		for (i=0;i<arr.length;i++) {
			if (str != "") { str = str + glue; }
			if (quoted) {
				str = str + "'" + arr[i] + "'";
			} else {
				str = str + arr[i];
			}
		}
		return str;
	}
	
	this.db = function(db_name, db_ver, db_label, db_size) {
		var db_inst = _db(db_name, db_ver, db_label, db_size);
		if (!db_inst) { return false; }
		
		var last_results = [];
		
		this.dbInstance = function() {
			return db_inst;
		}
		
		this.handleSqlError = function(tx, err) {
			if (_con) { _con.log(err) }
			else { alert(err); }
			return;
		}
		this.lastResult = function() {
			var results = last_results.reverse();
			
			//console.log(results[0]);
			
			return results[0];
		}
		
		this.doSql = function(sql, callback) {
			var self = this, result = false;
			if (!callback) { callback = function () { return false; } }
			try {
				db_inst.transaction(function(tx) {
					tx.executeSql(sql, [], function(tx, res) { callback(res); }, self.handleSqlError);
				});
			} catch (err) { alert(err); return result; }
			return true;
		}
		
		this.table = function(table_name, structure) {
			this.create = function() {
				return this.doSql("CREATE TABLE IF NOT EXISTS " + table_name + "(" + structure + ")");					
			}
			this.drop = function() {
				return this.doSql("DROP TABLE " + table_name);
			}
			
			this.insert = function(fields_values, callback) {
				this.create();
				var fields = [], values = [];
				for (var key in fields_values) {
					fields.push(key);
					values.push(fields_values[key]);
				}
				return this.doSql("INSERT INTO " + table_name + " (" + core.paramsToString(fields, false, ', ') + ") VALUES(" + core.paramsToString(values, true, ', ') + ")", callback);
			}
			
			this.remove = function(where, callback) {
				this.create();				
				return this.doSql("DELETE FROM " + table_name + " WHERE " + where, callback);
			}
			
			this.select = function(params, callback) {
				this.create();
				var fields = false, where = "", order = "", limit = "";
				if (params.fields && params.fields.length < 1) { return false; }
				var fields = core.paramsToString(params.fields, false, ', ');
				
				if (params.where && params.where.length > 0) {
					where = " WHERE ";
					for (var i in params.where) {
						if (where.length > 7) { where = where + ' AND '; }
						where = where + i + " = '" + params.where[i] + "'";
					}
				}
				
				if (params.order && params.order.field) {
					order = " ORDER BY " + params.order.field;
					if (params.order.dir) {
						order = order + " " + params.order.dir;
					}
				}
				
				if (params.limit && params.limit.count) {
					if (params.limit.start) {
						limit = " LIMIT " + params.limit.start + ", " + params.limit.count;
					} else {
						limit = " LIMIT " + params.limit.count;
					}
				}
				return this.doSql("SELECT " + fields + " FROM " + table_name + where + order + limit, callback);
			}
			return this;
		}
		return this;
	}
}



$(function() {
	/* My Offline Cache experiment 
	 * By Luke Morton
	 */
	var oc = new offlineCache();
	var details = 	'<h2>Current cache details</h2>' +
					'<p>According to your browser you are <strong>' + oc.connStatus() + '</strong>, whilst your offline cache is saying it is ' +
					'<strong>' + oc.cache.status() + '</strong>.</p>';
	$('#offlineCache').html(details);
	var db = oc.db('test', '1.0', 'My very first offline SQL DB', (1024*1024));
	if (db) {
		var pb = db.table('phonebook', 'id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, numb TEXT');
		$('#offlineCache').append(''
			+'<form action="js" method="post" id="add-entry">'
			+'	<p>'
			+'		<label for="name">Name:</label>'
			+'		<input type="text" name="name" id="name" />'
			+'	</p>'
			+'	<p>'
			+'		<label for="numb">Phone number:</label>'
			+'		<input type="text" name="numb" id="numb" />'
			+'	</p>'
			+'	<p><input type="submit" value="add" /></p>'
			+'</form>'
		);
		
		$('#offlineCache').append(''
			+'<form action="js" method="post" id="edit-entries">'
			+'	<p>'
			+'		<input type="submit" name="action" value="delete" />'
			+'	</p>'
			+'	<p class="check-control">'
			+'		<a href="#check-all">Check all</a>'
			+'		&nbsp;&nbsp;'
			+'		<a href="#uncheck-all">Uncheck all</a>'
			+'	</p>'
			+'	<table id="contacts">'
			+'		<thead>'
			+'			<tr class="titles">'
			+'				<td><input type="checkbox" id="check-all" /></td>'
			+'				<td>Name</td>'
			+'				<td>Phone number</td>'
			+'			</tr>'
			+'		</thead>'
			+'		<tbody>'
			+'		</tbody>'
			+'	</table>'
			+'	<p>'
			+'		<input type="submit" name="action" value="delete" />'
			+'	</p>'
			+'</form>'
		);
		
		var contacts = pb.select({fields: ['*']}, function(res) {
			for (var i=0; i<res.rows.length; i++) {
				var row = res.rows.item(i);
				$('#contacts tbody').append(''
					+'	<tr>'
					+'		<td><input type="checkbox" name="contact[' + row['id'] + ']" id="' + row['id'] + '" /></td>'
					+'		<td>' + row['name'] + '</td>'
					+'		<td>' + row['numb'] + '</td>'
					+'	</tr>'
				);
			}
		});
	
		$('#add-entry').submit(function() {
			var insert = pb.insert({
				name: $('#name').val(),
				numb: $('#numb').val()
			}, function(res) {
				if (res.insertId > 0) {
					$('#contacts tbody').prepend(''
						+'	<tr>'
						+'		<td><input type="checkbox" name="contact[' + res.insertId + ']" id="' + res.insertId + '" /></td>'
						+'		<td>' + $('#name').val() + '</td>'
						+'		<td>' + $('#numb').val() + '</td>'
						+'	</tr>'
					);
					$('#name').val('');
					$('#numb').val('');
				}
			});
			return false;
		});
		
		$('#edit-entries').submit(function(e) {
			e.preventDefault();
			var insert = pb.insert({
				name: $('#name').val(),
				numb: $('#numb').val()
			}, function(res) {
				if (res.insertId > 0) {
					$('#contacts').prepend(''
						+'	<tr>'
						+'		<td><input type="checkbox" name="contact[' + res.insertId + ']" id="' + res.insertId + '" /></td>'
						+'		<td>' + $('#name').val() + '</td>'
						+'		<td>' + $('#numb').val() + '</td>'
						+'	</tr>'
					);
					$('#name').val('');
					$('#numb').val('');
				}
			});
		});		
		
		$('#check-all').click(function() {
			$("#contacts input[type='checkbox']").attr('checked', $('#check-all').is(':checked'));   
		});
		$('.check-control a').click(function() {
			if ($(this).attr('href').indexOf('#check-all') > -1) {
				$("#contacts input[type='checkbox']").attr('checked', true);
			} else {
				$("#contacts input[type='checkbox']").attr('checked', false);
			}
			return false;
		});
	}
});