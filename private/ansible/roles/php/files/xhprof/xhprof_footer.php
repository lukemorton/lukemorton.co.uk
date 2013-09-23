 <?php
 /*
  * Taken from: http://talks.php.net/show/confoo10/11
  */
    $app = $_SERVER['HTTP_HOST'];
    $xhprof_data = xhprof_disable();
    $xhprof_runs = new XHProfRuns_Default();
    $id = $xhprof_runs->save_run($xhprof_data, $app);

    /*
     * Output the GUI link (disabled by default, complete as necessary)
     */
    // $ua = urlencode($app);
    // $profiler_url = "http://xhprof.localhost/index.php?run=$id&source=$ua";
    // echo '<a href="'. $profiler_url .'" target="_blank">Profiler output</a>';
