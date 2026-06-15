const MACHINES = [["E00328680","5CD5113YZH","N3041SACDW01471","Printer Console ACAD","PC001EXAM3041S","ECS 1 (main)",1],["E00328681","5CD5113YYL","N3041SACDW01472","Printer Console ACAD","PC002EXAM3041S","ECS 2 (main)",1],["E00328682","5CD5113YZ4","N3041SACDW01473","Staffroom 2 (Teacher Console)","PC003EXAM3041S","ECS 3 (main)",1],["E00328683","5CD5113YYY","N3041SACDW01474","(Floating ACAD)","PC004EXAM3041S","ECS 4 (main)",1],["E00328684","5CD5113YYJ","N3041SACDW01475","(Floating ACAD)","PC005EXAM3041S","ECS 5 (main)",1],["E00328685","5CD5113YZG","N3041SACDW01476","(Floating ACAD)","PC006EXAM3041S","ECS 6 (main)",0],["E00328686","5CD5113YYR","N3041SACDW01477","(Floating ACAD)","PC007EXAM3041S","ECS 7 (main)",0],["E00328687","5CD5113YXZ","N3041SACDW01478","(Floating ACAD)","PC008EXAM3041S","ECS 8 (main)",0],["E00328688","5CD5113YYH","N3041SACDW01479","(Floating ACAD)","PC009EXAM3041S","ECS 9 (main)",0],["E00328689","5CD5113YYB","N3041SACDW01480","(Floating ACAD)","PC010EXAM3041S","ECS 10 (main)",0],["E00303711","5CD511297B","N3041SACDW01606","Level 1 D&T (Learning Hive 4)","PC011EXAM3041S","ECS 1",1],["E00303712","5CD5112980","N3041SACDW01607","Level 1 D&T (Learning Hive 4)","PC012EXAM3041S","ECS 1",1],["E00303713","5CD511298G","N3041SACDW01608","Level 1 D&T (Learning Hive 4)","PC013EXAM3041S","ECS 1",1],["E00303714","5CD5112977","N3041SACDW01609","Level 1 D&T (Learning Hive 4)","PC014EXAM3041S","ECS 1",1],["E00303715","5CD511297D","N3041SACDW01610","Level 1 D&T (Learning Hive 4)","PC015EXAM3041S","ECS 1",1],["E00303716","5CD511298J","N3041SACDW01611","Level 1 D&T (Learning Hive 4)","PC016EXAM3041S","ECS 1",1],["E00303717","5CD511297Z","N3041SACDW01612","Level 1 D&T (Learning Hive 4)","PC017EXAM3041S","ECS 1",1],["E00303718","5CD511296V","N3041SACDW01613","Level 1 D&T (Learning Hive 4)","PC018EXAM3041S","ECS 1",1],["E00303719","5CD5112975","N3041SACDW01614","Level 1 D&T (Learning Hive 4)","PC019EXAM3041S","ECS 1",1],["E00303720","5CD511297M","N3041SACDW01615","Level 1 D&T (Learning Hive 4)","PC020EXAM3041S","ECS 1",1],["E00303721","5CD5112973","N3041SACDW01616","Level 1 D&T (Learning Hive 4)","PC021EXAM3041S","ECS 1",1],["E00303722","5CD511298X","N3041SACDW01617","Level 1 D&T (Learning Hive 4)","PC022EXAM3041S","ECS 1",1],["E00303723","5CD511297Y","N3041SACDW01618","Level 1 D&T (Learning Hive 4)","PC023EXAM3041S","ECS 1",1],["E00303724","5CD511296Z","N3041SACDW01619","Level 1 D&T (Learning Hive 4)","PC024EXAM3041S","ECS 1",1],["E00303725","5CD5112985","N3041SACDW01620","Level 1 D&T (Learning Hive 4)","PC025EXAM3041S","ECS 1",1],["E00303726","5CD511299C","N3041SACDW01621","Level 1 D&T (Learning Hive 4)","PC026EXAM3041S","ECS 1",1],["E00303727","5CD511298F","N3041SACDW01622","Level 1 D&T (Learning Hive 4)","PC027EXAM3041S","ECS 1",1],["E00303728","5CD511297S","N3041SACDW01623","Level 1 D&T (Learning Hive 4)","PC028EXAM3041S","ECS 1",1],["E00303729","5CD511297R","N3041SACDW01624","Level 1 D&T (Learning Hive 4)","PC029EXAM3041S","ECS 1",1],["E00303730","5CD5112984","N3041SACDW01625","Level 1 D&T (Learning Hive 4)","PC030EXAM3041S","ECS 1",1],["E00303771","5CD511298W","N3041SACDW01666","Learning Hive 3","PC031EXAM3041S","ECS 1",1],["E00303772","5CD511298M","N3041SACDW01667","Learning Hive 3","PC032EXAM3041S","ECS 1",1],["E00303773","5CD511297F","N3041SACDW01668","Learning Hive 3","PC033EXAM3041S","ECS 1",1],["E00303774","5CD511298Y","N3041SACDW01669","Learning Hive 3","PC034EXAM3041S","ECS 1",1],["E00303775","5CD511298R","N3041SACDW01670","Learning Hive 3","PC035EXAM3041S","ECS 1",1],["E00303776","5CD5112991","N3041SACDW01671","Learning Hive 3","PC036EXAM3041S","ECS 1",1],["E00303777","5CD511297H","N3041SACDW01672","Learning Hive 3","PC037EXAM3041S","ECS 1",1],["E00303778","5CD5112981","N3041SACDW01673","Learning Hive 3","PC038EXAM3041S","ECS 1",1],["E00303779","5CD5112986","N3041SACDW01674","Learning Hive 3","PC039EXAM3041S","ECS 1",1],["E00303780","5CD511297K","N3041SACDW01675","Learning Hive 3","PC040EXAM3041S","ECS 1",1],["E00303781","5CD511299B","N3041SACDW01676","Learning Hive 3","PC041EXAM3041S","ECS 2",1],["E00303782","5CD511296W","N3041SACDW01677","Learning Hive 3","PC042EXAM3041S","ECS 2",1],["E00303783","5CD5112971","N3041SACDW01678","Learning Hive 3","PC043EXAM3041S","ECS 2",1],["E00303784","5CD511298C","N3041SACDW01679","Learning Hive 3","PC044EXAM3041S","ECS 2",1],["E00303785","5CD511298L","N3041SACDW01680","Learning Hive 3","PC045EXAM3041S","ECS 2",1],["E00303786","5CD511298S","N3041SACDW01681","Learning Hive 3","PC046EXAM3041S","ECS 2",1],["E00303787","5CD511298B","N3041SACDW01682","Learning Hive 3","PC047EXAM3041S","ECS 2",1],["E00303788","5CD5112998","N3041SACDW01683","Learning Hive 3","PC048EXAM3041S","ECS 2",1],["E00303789","5CD511298V","N3041SACDW01684","Learning Hive 3","PC049EXAM3041S","ECS 2",1],["E00303790","5CD5112990","N3041SACDW01685","Learning Hive 3","PC050EXAM3041S","ECS 2",1],["E00328753","5CD5115SBC","N3041SACDW01544","Learning Hive 2","PC051EXAM3041S","ECS 2",1],["E00328754","5CD5115S9V","N3041SACDW01545","Learning Hive 2","PC052EXAM3041S","ECS 2",1],["E00328755","5CD5115SBQ","N3041SACDW01546","Learning Hive 2","PC053EXAM3041S","ECS 2",1],["E00328756","5CD5115SBT","N3041SACDW01547","Learning Hive 2","PC054EXAM3041S","ECS 2",1],["E00328757","5CD5115S7B","N3041SACDW01548","Learning Hive 2","PC055EXAM3041S","ECS 2",1],["E00328758","5CD5115S9X","N3041SACDW01549","Learning Hive 2","PC056EXAM3041S","ECS 2",1],["E00328759","5CD5115SBL","N3041SACDW01550","Learning Hive 2","PC057EXAM3041S","ECS 2",1],["E00328760","5CD5115SBR","N3041SACDW01551","Learning Hive 2","PC058EXAM3041S","ECS 2",1],["E00328761","5CD5115S94","N3041SACDW01552","Learning Hive 2","PC059EXAM3041S","ECS 2",1],["E00328762","5CD5115S9M","N3041SACDW01553","Learning Hive 2","PC060EXAM3041S","ECS 2",1],["E00328763","5CD5115SC4","N3041SACDW01554","Learning Hive 2","PC061EXAM3041S","ECS 2",1],["E00328764","5CD5115SBP","N3041SACDW01555","Learning Hive 2","PC062EXAM3041S","ECS 2",1],["E00328765","5CD5115SC2","N3041SACDW01556","Learning Hive 2","PC063EXAM3041S","ECS 2",1],["E00328766","5CD5115SBM","N3041SACDW01557","Learning Hive 2","PC064EXAM3041S","ECS 2",1],["E00328767","5CD5115SC1","N3041SACDW01558","Learning Hive 2","PC065EXAM3041S","ECS 2",1],["E00328768","5CD5115S9W","N3041SACDW01559","Learning Hive 2","PC066EXAM3041S","ECS 2",1],["E00328769","5CD5115SB0","N3041SACDW01560","Learning Hive 2","PC067EXAM3041S","ECS 2",1],["E00328770","5CD5115S8X","N3041SACDW01561","Learning Hive 2","PC068EXAM3041S","ECS 2",1],["E00328771","5CD5115S85","N3041SACDW01562","Learning Hive 2","PC069EXAM3041S","ECS 2",1],["E00328772","5CD5115S9S","N3041SACDW01563","Learning Hive 2","PC070EXAM3041S","ECS 2",1],["E00328693","5CD5115SC7","N3041SACDW01484","Computer Lab 1a","PC071EXAM3041S","ECS 3",1],["E00328694","5CD5115SC6","N3041SACDW01485","Computer Lab 1a","PC072EXAM3041S","ECS 3",1],["E00328695","5CD5115S7Z","N3041SACDW01486","Computer Lab 1a","PC073EXAM3041S","ECS 3",1],["E00328696","5CD5115SB5","N3041SACDW01487","Computer Lab 1a","PC074EXAM3041S","ECS 3",1],["E00328697","5CD5115SB6","N3041SACDW01488","Computer Lab 1a","PC075EXAM3041S","ECS 3",1],["E00328698","5CD5115S82","N3041SACDW01489","Computer Lab 1a","PC076EXAM3041S","ECS 3",1],["E00328699","5CD5115SB4","N3041SACDW01490","Computer Lab 1a","PC077EXAM3041S","ECS 3",1],["E00328700","5CD5115SBS","N3041SACDW01491","Computer Lab 1a","PC078EXAM3041S","ECS 3",1],["E00328701","5CD5115S7K","N3041SACDW01492","Computer Lab 1a","PC079EXAM3041S","ECS 3",1],["E00328702","5CD5115S6Q","N3041SACDW01493","Computer Lab 1a","PC080EXAM3041S","ECS 3",0],["E00328703","5CD5115S76","N3041SACDW01494","Computer Lab 1a","PC081EXAM3041S","ECS 3",1],["E00328704","5CD5115SCG","N3041SACDW01495","Computer Lab 1a","PC082EXAM3041S","ECS 3",1],["E00328705","5CD5115SBZ","N3041SACDW01496","Computer Lab 1a","PC083EXAM3041S","ECS 3",1],["E00328706","5CD5115S9R","N3041SACDW01497","Computer Lab 1a","PC084EXAM3041S","ECS 3",1],["E00328707","5CD5115SC8","N3041SACDW01498","Computer Lab 1a","PC085EXAM3041S","ECS 3",1],["E00328708","5CD5115SC3","N3041SACDW01499","Computer Lab 1a","PC086EXAM3041S","ECS 3",1],["E00328709","5CD5115S75","N3041SACDW01500","Computer Lab 1a","PC087EXAM3041S","ECS 3",1],["E00328710","5CD5115SBF","N3041SACDW01501","Computer Lab 1a","PC088EXAM3041S","ECS 3",1],["E00328711","5CD5115S8H","N3041SACDW01502","Computer Lab 1a","PC089EXAM3041S","ECS 3",1],["E00328712","5CD5115S95","N3041SACDW01503","Computer Lab 1a","PC090EXAM3041S","ECS 3",1],["E00328713","5CD5115S7G","N3041SACDW01504","Computer Lab 1b","PC091EXAM3041S","ECS 3",0],["E00328714","5CD5115S9F","N3041SACDW01505","Computer Lab 1b","PC092EXAM3041S","ECS 3",0],["E00328715","5CD5115S6G","N3041SACDW01506","Computer Lab 1b","PC093EXAM3041S","ECS 3",0],["E00328716","5CD5115S8W","N3041SACDW01507","Computer Lab 1b","PC094EXAM3041S","ECS 3",0],["E00328717","5CD5115S8Z","N3041SACDW01508","Computer Lab 1b","PC095EXAM3041S","ECS 3",0],["E00328718","5CD5115S96","N3041SACDW01509","Computer Lab 1b","PC096EXAM3041S","ECS 3",0],["E00328719","5CD5115S90","N3041SACDW01510","Computer Lab 1b","PC097EXAM3041S","ECS 3",0],["E00328720","5CD5115S92","N3041SACDW01511","Computer Lab 1b","PC098EXAM3041S","ECS 3",0],["E00328721","5CD5115S8Y","N3041SACDW01512","Computer Lab 1b","PC099EXAM3041S","ECS 3",0],["E00328722","5CD5115S6Y","N3041SACDW01513","Computer Lab 1b","PC100EXAM3041S","ECS 3",0],["E00328723","5CD5115S7R","N3041SACDW01514","Computer Lab 1b","PC101EXAM3041S","ECS 4",0],["E00328724","5CD5115S9H","N3041SACDW01515","Computer Lab 1b","PC102EXAM3041S","ECS 4",0],["E00328725","5CD5115S6B","N3041SACDW01516","Computer Lab 1b","PC103EXAM3041S","ECS 4",0],["E00328726","5CD5115SCB","N3041SACDW01517","Computer Lab 1b","PC104EXAM3041S","ECS 4",0],["E00328727","5CD5115S6Z","N3041SACDW01518","Computer Lab 1b","PC105EXAM3041S","ECS 4",0],["E00328728","5CD5115SCH","N3041SACDW01519","Computer Lab 1b","PC106EXAM3041S","ECS 4",0],["E00328729","5CD5115S9Q","N3041SACDW01520","Computer Lab 1b","PC107EXAM3041S","ECS 4",0],["E00328730","5CD5115SC9","N3041SACDW01521","Computer Lab 1b","PC108EXAM3041S","ECS 4",0],["E00328731","5CD5115SBG","N3041SACDW01522","Computer Lab 1b","PC109EXAM3041S","ECS 4",0],["E00328732","5CD5115S93","N3041SACDW01523","Computer Lab 1b","PC110EXAM3041S","ECS 4",0],["E00328775","5CD51238B8","N3041SACDW01566","Computer Lab 2a","PC111EXAM3041S","ECS 4",0],["E00328776","5CD512386Y","N3041SACDW01567","Computer Lab 2a","PC112EXAM3041S","ECS 4",0],["E00328777","5CD512389X","N3041SACDW01568","Computer Lab 2a","PC113EXAM3041S","ECS 4",0],["E00328778","5CD51238BX","N3041SACDW01569","Computer Lab 2a","PC114EXAM3041S","ECS 4",0],["E00328779","5CD512387T","N3041SACDW01570","Computer Lab 2a","PC115EXAM3041S","ECS 4",0],["E00328780","5CD51238CT","N3041SACDW01571","Computer Lab 2a","PC116EXAM3041S","ECS 4",0],["E00328781","5CD512387D","N3041SACDW01572","Computer Lab 2a","PC117EXAM3041S","ECS 4",0],["E00328782","5CD512388V","N3041SACDW01573","Computer Lab 2a","PC118EXAM3041S","ECS 4",0],["E00328783","5CD5123863","N3041SACDW01574","Computer Lab 2a","PC119EXAM3041S","ECS 4",0],["E00328784","5CD512386Z","N3041SACDW01575","Computer Lab 2a","PC120EXAM3041S","ECS 4",0],["E00328785","5CD51238CH","N3041SACDW01576","Computer Lab 2a","PC121EXAM3041S","ECS 4",0],["E00328786","5CD512388H","N3041SACDW01577","Computer Lab 2a","PC122EXAM3041S","ECS 4",0],["E00328787","5CD512386G","N3041SACDW01578","Computer Lab 2a","PC123EXAM3041S","ECS 4",0],["E00328788","5CD51238CS","N3041SACDW01579","Computer Lab 2a","PC124EXAM3041S","ECS 4",0],["E00328789","5CD512389B","N3041SACDW01580","Computer Lab 2a","PC125EXAM3041S","ECS 4",0],["E00328790","5CD512389Z","N3041SACDW01581","Computer Lab 2a","PC126EXAM3041S","ECS 4",0],["E00328791","5CD512388C","N3041SACDW01582","Computer Lab 2a","PC127EXAM3041S","ECS 4",0],["E00328792","5CD51238CM","N3041SACDW01583","Computer Lab 2a","PC128EXAM3041S","ECS 4",0],["E00328793","5CD512388J","N3041SACDW01584","Computer Lab 2a","PC129EXAM3041S","ECS 4",0],["E00328794","5CD512386R","N3041SACDW01585","Computer Lab 2a","PC130EXAM3041S","ECS 4",0],["E00328795","5CD51238CK","N3041SACDW01586","Computer Lab 2b","PC131EXAM3041S","ECS 5",0],["E00328796","5CD512386H","N3041SACDW01587","Computer Lab 2b","PC132EXAM3041S","ECS 5",0],["E00328797","5CD512388P","N3041SACDW01588","Computer Lab 2b","PC133EXAM3041S","ECS 5",0],["E00328798","5CD5123881","N3041SACDW01589","Computer Lab 2b","PC134EXAM3041S","ECS 5",0],["E00328799","5CD512387N","N3041SACDW01590","Computer Lab 2b","PC135EXAM3041S","ECS 5",0],["E00328800","5CD512386S","N3041SACDW01591","Computer Lab 2b","PC136EXAM3041S","ECS 5",0],["E00328801","5CD5123864","N3041SACDW01592","Computer Lab 2b","PC137EXAM3041S","ECS 5",0],["E00328802","5CD51238CG","N3041SACDW01593","Computer Lab 2b","PC138EXAM3041S","ECS 5",0],["E00328803","5CD512389P","N3041SACDW01594","Computer Lab 2b","PC139EXAM3041S","ECS 5",0],["E00328804","5CD512387S","N3041SACDW01595","Computer Lab 2b","PC140EXAM3041S","ECS 5",0],["E00328805","5CD51238BQ","N3041SACDW01596","Computer Lab 2b","PC141EXAM3041S","ECS 5",0],["E00328806","5CD51238BR","N3041SACDW01597","Computer Lab 2b","PC142EXAM3041S","ECS 5",0],["E00328807","5CD51238CQ","N3041SACDW01598","Computer Lab 2b","PC143EXAM3041S","ECS 5",0],["E00328808","5CD51238CN","N3041SACDW01599","Computer Lab 2b","PC144EXAM3041S","ECS 5",0],["E00328809","5CD512385Z","N3041SACDW01600","Computer Lab 2b","PC145EXAM3041S","ECS 5",0],["E00328810","5CD51238B5","N3041SACDW01601","Computer Lab 2b","PC146EXAM3041S","ECS 5",0],["E00328811","5CD51238CF","N3041SACDW01602","Computer Lab 2b","PC147EXAM3041S","ECS 5",0],["E00328812","5CD51238C9","N3041SACDW01603","Computer Lab 2b","PC148EXAM3041S","ECS 5",0],["E00328813","5CD51238CJ","N3041SACDW01604","Computer Lab 2b","PC149EXAM3041S","ECS 5",0],["E00328814","5CD51238CP","N3041SACDW01605","Computer Lab 2b","PC150EXAM3041S","ECS 5",0],["E00303751","5CD511297W","N3041SACDW01646","Design Studio","PC151EXAM3041S","ECS 5",0],["E00303752","5CD511298Q","N3041SACDW01647","Design Studio","PC152EXAM3041S","ECS 5",0],["E00303753","5CD5112983","N3041SACDW01648","Design Studio","PC153EXAM3041S","ECS 5",0],["E00303754","5CD511296T","N3041SACDW01649","Design Studio","PC154EXAM3041S","ECS 5",0],["E00303755","5CD5112992","N3041SACDW01650","Design Studio","PC155EXAM3041S","ECS 5",0],["E00303756","5CD511298Z","N3041SACDW01651","Design Studio","PC156EXAM3041S","ECS 5",0],["E00303757","5CD5112972","N3041SACDW01652","Design Studio","PC157EXAM3041S","ECS 5",0],["E00303758","5CD5112988","N3041SACDW01653","Design Studio","PC158EXAM3041S","ECS 5",0],["E00303759","5CD511298P","N3041SACDW01654","Design Studio","PC159EXAM3041S","ECS 5",0],["E00303760","5CD511297J","N3041SACDW01655","Design Studio","PC160EXAM3041S","ECS 5",0],["E00303761","5CD511298H","N3041SACDW01656","Design Studio","PC161EXAM3041S","ECS 6",0],["E00303762","5CD511297N","N3041SACDW01657","Design Studio","PC162EXAM3041S","ECS 6",0],["E00303763","5CD5112978","N3041SACDW01658","Design Studio","PC163EXAM3041S","ECS 6",0],["E00303764","5CD5112989","N3041SACDW01659","Design Studio","PC164EXAM3041S","ECS 6",0],["E00303765","5CD511296X","N3041SACDW01660","Design Studio","PC165EXAM3041S","ECS 6",0],["E00303766","5CD5112993","N3041SACDW01661","Design Studio","PC166EXAM3041S","ECS 6",0],["E00303767","5CD5112974","N3041SACDW01662","Design Studio","PC167EXAM3041S","ECS 6",0],["E00303768","5CD5112970","N3041SACDW01663","Design Studio","PC168EXAM3041S","ECS 6",0],["E00303769","5CD511297T","N3041SACDW01664","Design Studio","PC169EXAM3041S","ECS 6",0],["E00303770","5CD5112979","N3041SACDW01665","Design Studio","PC170EXAM3041S","ECS 6",0]];

(function(){
  const ROOM_PRIORITY = ["Computer Lab 1a","Computer Lab 1b","Computer Lab 2a","Computer Lab 2b",
    "Learning Hive 2","Learning Hive 3","Level 1 D&T (Learning Hive 4)","Design Studio","(Floating ACAD)",
    "Printer Console ACAD","Staffroom 2 (Teacher Console)"];
  const STORE_KEY = "exam_states_v2", SEED_KEY = "exam_seeded_v2";
  let states = {}, filter = "all", query = "", groupBy = "room", collapsed = {};

  function ecsNum(e){ const m = String(e).match(/ECS\s*(\d+)/); return m? parseInt(m[1]):999; }
  function isMain(e){ return /\(main\)/i.test(e); }

  async function load(){
    try { const r = await window.storage.get(STORE_KEY); if (r&&r.value) states = JSON.parse(r.value); } catch(e){}
    let seeded=false;
    try { const s = await window.storage.get(SEED_KEY); if(s&&s.value) seeded=true; } catch(e){}
    if (!seeded){
      MACHINES.forEach(m=>{ states[m[0]] = m[6]? "done":"rem"; });
      await save();
      try { await window.storage.set(SEED_KEY,"1"); } catch(e){}
    }
  }
  async function save(){ try { await window.storage.set(STORE_KEY, JSON.stringify(states)); } catch(e){} }
  function next(s){ return s==="rem"?"prog": s==="prog"?"done":"rem"; }

  function groupsFor(){
    const map = {};
    MACHINES.forEach(m=>{ const k = groupBy==="room"? m[3] : (m[5]||"—"); (map[k]=map[k]||[]).push(m); });
    let keys = Object.keys(map);
    if (groupBy==="room") keys.sort((a,b)=>{ const ia=ROOM_PRIORITY.indexOf(a),ib=ROOM_PRIORITY.indexOf(b);
      return (ia<0?99:ia)-(ib<0?99:ib) || a.localeCompare(b); });
    else keys.sort((a,b)=> (isMain(a)-isMain(b)) || (ecsNum(a)-ecsNum(b)) || a.localeCompare(b));
    return {map, keys};
  }

  function render(){
    const app = document.getElementById("app");
    const totals = {done:0,prog:0,rem:0};
    MACHINES.forEach(m=> totals[states[m[0]]||"rem"]++);
    const total = MACHINES.length;
    const donePct = total? totals.done/total*100:0, progPct = total? totals.prog/total*100:0;

    let html = `
    <div class="top">
      <h1>Exam Imaging Tracker</h1>
      <div class="sub">Tap a machine: Remaining → In&nbsp;progress → Done</div>
      <div class="bar-wrap">
        <div class="bar-done" style="width:${donePct}%"></div>
        <div class="bar-prog" style="left:${donePct}%;width:${progPct}%"></div>
        <div class="bar-label"><span>${totals.done} done${totals.prog?" · "+totals.prog+" in progress":""}</span><span>${totals.done}/${total} · ${Math.round(donePct)}%</span></div>
      </div>
      <div class="controls">
        <input class="search" id="q" placeholder="Search hostname or asset tag…" value="${query.replace(/"/g,'&quot;')}">
        <div class="seg filter">
          <button data-f="all" class="${filter==='all'?'on':''}">All</button>
          <button data-f="rem" class="${filter==='rem'?'on':''}">Left</button>
          <button data-f="done" class="${filter==='done'?'on':''}">Done</button>
        </div>
      </div>
      <div class="grouprow">
        <span>Group by</span>
        <div class="seg">
          <button data-g="room" class="${groupBy==='room'?'on':''}">Room</button>
          <button data-g="ecs" class="${groupBy==='ecs'?'on':''}">ECS</button>
        </div>
      </div>
    </div>`;

    const {map, keys} = groupsFor();
    let shown = 0;
    keys.forEach(key=>{
      let list = map[key];
      if (query){ const q=query.toLowerCase();
        list = list.filter(m=> m[4].toLowerCase().includes(q)||m[0].toLowerCase().includes(q)||m[2].toLowerCase().includes(q)); }
      if (filter==="rem") list = list.filter(m=> (states[m[0]]||"rem")!=="done");
      if (filter==="done") list = list.filter(m=> (states[m[0]]||"rem")==="done");
      if (!list.length) return;
      shown += list.length;
      const rd = map[key].filter(m=> (states[m[0]]||"rem")==="done").length, rt = map[key].length;
      const isCol = collapsed[key];
      html += `<div class="room ${isCol?'collapsed':''}" data-key="${encodeURIComponent(key)}">
        <div class="room-head js-head">
          <span class="rname">${key}</span>
          <div class="room-mini"><span style="width:${rt?rd/rt*100:0}%"></span></div>
          <span class="rcount">${rd}/${rt}</span><span class="chev">▼</span>
        </div><div class="grid">`;
      list.forEach(m=>{
        const s = states[m[0]]||"rem";
        const tick = s==="done"?"✔":s==="prog"?"◐":"○";
        const sub = groupBy==="room"? (m[5]||"—") : m[3];
        html += `<div class="card" data-s="${s}" data-asset="${m[0]}">
          <span class="tick">${tick}</span>
          <div class="exam mono">${m[4]}</div>
          <div class="meta">${m[0]} · ${sub}</div></div>`;
      });
      html += `</div></div>`;
    });
    if (!shown) html += `<div class="empty">Nothing matches this view.</div>`;

    html += `<div class="foot">
      <div class="legend">
        <span><i style="background:var(--rem);border:1px solid var(--line)"></i>Remaining</span>
        <span><i style="background:var(--prog-bg);border:1px solid #fcd34d"></i>In&nbsp;progress</span>
        <span><i style="background:var(--done-bg);border:1px solid #86efac"></i>Done</span>
      </div>
      <button id="imp">Import</button>
      <button id="exp">Export</button>
    </div>`;

    app.innerHTML = html;
    wire();
  }

  function wire(){
    document.querySelectorAll(".card").forEach(c=> c.addEventListener("click", async ()=>{
      const a=c.dataset.asset; states[a]=next(states[a]||"rem"); await save(); render(); }));
    document.querySelectorAll(".js-head").forEach(h=> h.addEventListener("click", ()=>{
      const k=decodeURIComponent(h.parentElement.dataset.key); collapsed[k]=!collapsed[k]; render(); }));
    document.querySelectorAll(".seg.filter button").forEach(b=> b.addEventListener("click", ()=>{ filter=b.dataset.f; render(); }));
    document.querySelectorAll("[data-g]").forEach(b=> b.addEventListener("click", ()=>{ groupBy=b.dataset.g; collapsed={}; render(); }));
    const q=document.getElementById("q");
    if(q) q.addEventListener("input", e=>{ query=e.target.value; const p=e.target.selectionStart; render();
      const n=document.getElementById("q"); if(n){n.focus(); n.setSelectionRange(p,p);} });
    const exp=document.getElementById("exp"); if(exp) exp.addEventListener("click", exportCSV);
    const imp=document.getElementById("imp"); if(imp) imp.addEventListener("click", ()=> document.getElementById("csvfile").click());
  }

  function exportCSV(){
    const head=["Asset Tag","Serial Number","Hostname","Location","Exam Hostname","ECS","Status"];
    const rows=MACHINES.map(m=>{ const s=states[m[0]]||"rem";
      const st=s==="done"?"Done":s==="prog"?"In progress":"";
      return [m[0],m[1],m[2],m[3],m[4],m[5],st].map(v=>'"'+String(v).replace(/"/g,'""')+'"').join(","); });
    const csv=head.join(",")+"\r\n"+rows.join("\r\n");
    const url=URL.createObjectURL(new Blob([csv],{type:"text/csv"}));
    const a=document.createElement("a"); a.href=url; a.download="exam_progress.csv"; a.click(); URL.revokeObjectURL(url);
    toast("Exported "+MACHINES.length+" machines");
  }

  function parseCSV(text){
    const rows=[]; let f=[],cur="",inq=false;
    for(let i=0;i<text.length;i++){ const ch=text[i];
      if(inq){ if(ch==='"'){ if(text[i+1]==='"'){cur+='"';i++;} else inq=false; } else cur+=ch; }
      else { if(ch==='"') inq=true; else if(ch===','){ f.push(cur); cur=""; }
        else if(ch==='\n'||ch==='\r'){ if(ch==='\r'&&text[i+1]==='\n')i++; if(cur!==""||f.length){ f.push(cur); rows.push(f); f=[]; cur=""; } }
        else cur+=ch; } }
    if(cur!==""||f.length){ f.push(cur); rows.push(f); }
    return rows;
  }

  async function importCSV(file){
    const text=await file.text();
    const rows=parseCSV(text);
    if(!rows.length){ toast("Empty file"); return; }
    const head=rows[0].map(h=>h.trim().toLowerCase());
    const ai=head.indexOf("asset tag"), si=head.indexOf("status");
    if(ai<0||si<0){ toast("Need 'Asset Tag' and 'Status' columns"); return; }
    const valid=new Set(MACHINES.map(m=>m[0]));
    let applied=0,unknown=0;
    for(let r=1;r<rows.length;r++){
      const a=(rows[r][ai]||"").trim(); if(!a) continue;
      if(!valid.has(a)){ unknown++; continue; }
      const v=(rows[r][si]||"").trim().toLowerCase();
      states[a]= v==="done"?"done": (v==="in progress"||v==="prog")?"prog":"rem";
      applied++;
    }
    await save(); render();
    toast("Imported "+applied+" machines"+(unknown?" · "+unknown+" unknown skipped":""));
  }

  let toastT;
  function toast(msg){ let t=document.getElementById("toast");
    if(!t){ t=document.createElement("div"); t.id="toast"; t.className="toast"; document.body.appendChild(t); }
    t.textContent=msg; t.classList.add("show"); clearTimeout(toastT);
    toastT=setTimeout(()=>t.classList.remove("show"),2600); }

  document.getElementById("csvfile").addEventListener("change", e=>{
    if(e.target.files[0]) importCSV(e.target.files[0]); e.target.value=""; });

  load().then(render);
})();
