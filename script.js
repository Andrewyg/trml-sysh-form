$(document).ready(function(){
    $("#prioritySort").sortable();
    $("#prioritySort").disableSelection();

    $('#weekendPractice').change(function(){
        const selected=($("input[name='weekendSelect']:checked").val());
        if(selected=="certainPeriod") {
            $("#customTimePeriodforWeekend").removeClass("visually-hidden");
        } else {
            $("#customTimePeriodforWeekend").addClass("visually-hidden");
        }
    });
    $('#weekinPractice').change(function(){
        const selected=($("input[name='weekinSelect']:checked").val());
        if(selected=="other") {
            $("#weekinOtherSelect").removeClass("visually-hidden");
        } else {
            $("#weekinOtherSelect").addClass("visually-hidden");
        }
        if(selected=="nope") {
            $("#dismissTime").addClass("visually-hidden");
            $("#weekinDelay").addClass("visually-hidden");
        } else {
            $("#dismissTime").removeClass("visually-hidden");
            $("#weekinDelay").removeClass("visually-hidden");
        }
    });
    $('#scene1selection').change(function(){
        const selected=($("input[name='scene1select']:checked").val());
        if(selected=="yes") {
            $("#scene1longQ").removeClass("visually-hidden");
        } else {
            $("#scene1longQ").addClass("visually-hidden");
        }
    });
    $("#mainForm").submit(()=> {
        $("#prioritySortRes").val($("#prioritySort").sortable('toArray').toStrin());
    });
});
