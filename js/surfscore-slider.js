var activeTabs;

function initializeSlider(tabContainer, sessionContainer) {
    //first we generate the session html
    numSessions = 12;
    for (var i = 0; i < numSessions; i++) {

        tabID = 'tab'+i;
        sessionID = 'session'+i;
        if (i < 1) activeFlag = 'active';
        else activeFlag = 'inactive';
        session = '<div class="session '+activeFlag+'" id="'+sessionID+'">'+
              '<h2 class="span12 session-title">Session #'+(i+1)+'</h2>'+
              '<div class="row-fluid">'+
                '<div class="session-stats span1 offset1">'+
                  '<h3>Stats</h3>'+
                  '<p>Radical: 7.9</p>'+
                  '<p>27 waves</p>'+
                  '<p>89 tricks</p>'+
                '</div>'+
                '<div class="session-charts span10 row-fluid">'+
                  '<h3 class="span10">Charts</h3>'+
                  '<div class="span5"><img class="img-rounded" src="http://placehold.it/300x200" alt=""></div>'+
                  '<div class="span5"><img class="img-rounded" src="http://placehold.it/300x200" alt=""></div>'+
                  '<div class="span5"><img class="img-rounded" src="http://placehold.it/300x200" alt=""></div>'+
                  '<div class="span5"><img class="img-rounded" src="http://placehold.it/300x200" alt=""></div>'+
                '</div>'+
              '</div>'+
            '</div>';
        

        tabText = 'tab'+(i+1);
        tab = '<div class="span2 tab" id="'+tabID+'">'+tabText+'</div>';
        $('#'+sessionContainer).append(session);
        $('#'+tabContainer).append(tab);
        
        $('#'+tabID).click(function(){
          $(this).siblings().css('background-color','#ffffff');
          $(this).css('background-color','#ff0000');
          $(".session").css({'display':'none'});
          currentID = $(this).attr('id').substring(3);
          $('#session'+currentID).css({'display':'inherit'});
        });
        if (i >= 4) {
            $('#'+tabID).hide();
        }
    }

    activeTabs = [0,1,2,3];

 // now we need arrows that start out with no slide left, and slide right 4
        // sliding means activating the next 4 tabs and clearing the active session
        // and keeping track of the numbers (aka which are the next 4 to the right and left)

    $('#slide-left').click(function() {
      console.log('clicked');
      if (activeTabs[3]-4>0) {
        console.log('can go left');
        $('.tab').hide();
        var nextIDs = new Array();
        for (var i = 0; i < activeTabs.length; i++) {
          nextID = activeTabs[i] - 4;
          nextIDs.push(nextID)
          $('#tab'+nextID).show();
        }
        activeTabs = nextIDs;
        

      }
      
    })

    $('#slide-right').click(function() {
      console.log('clicked');
      if (activeTabs[3]+4<13) {
        console.log('can go right');
        $('.tab').hide();
        var nextIDs = new Array();
        for (var i = 0; i < activeTabs.length; i++) {
          nextID = activeTabs[i] + 4;
          nextIDs.push(nextID)
          $('#tab'+nextID).show();
        }
        activeTabs = nextIDs;
      }
    })

    //activateTabs(['1','2','3','4']);

   


}

function activateTabs(tabList) {
    // deactivate all tabs
    
}

$(document).ready(function() {
    tabContainer = "slider-tab-container";
    sessionContainer = "sessions";
    initializeSlider(tabContainer, sessionContainer);
});