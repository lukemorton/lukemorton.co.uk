 <?php
 /*
  * Taken from: http://talks.php.net/show/confoo10/11
  */
    include '/usr/share/php/xhprof_lib/utils/xhprof_lib.php';
    include '/usr/share/php/xhprof_lib/utils/xhprof_runs.php';
    xhprof_enable(XHPROF_FLAGS_CPU + XHPROF_FLAGS_MEMORY);

