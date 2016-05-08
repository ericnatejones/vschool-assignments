var evilCorp = "bookkeeprlarry";

function masterPlan() {
    var extras = "";
    for (i = 0; i < evilCorp.length; i++) {
        var blarg = evilCorp[i];
        console.log(blarg);
        
        if (evilCorp.lastIndexOf(blarg) !== blarg.indexOf(blarg)) {
            extras += evilCorp[i];
            evilCorp = evilCorp.slice(i);
            console.log(evilCorp);
        }
    }

//    console.log(evilCorp);
    console.log(extras);
}
masterPlan();