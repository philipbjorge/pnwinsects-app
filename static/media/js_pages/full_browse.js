var lis = [".Species",".Genus",".Tribe",".Subfamily",".Family"];
var cSel = $(".countySel").clone(true);
$(document).ready(function(){
    function hideAll(){
        $.each(lis, function(index, li) {
            $(li).hide();
        });
    }
    function showAll(){
        $.each(lis, function(index, li) {
            $(li).show();
        });
    }
    function showNested(){
        $.each(lis, function(index, li) {
            $(li).filter(function(){
                return $(this).css("display") != "none";})
            .parent().parent().show();
        });
    }

    $("#countyselect").multiselect({
        noneSelectedText: "Select Counties/Regional Districts (None selected)",
        selectedText: function(numChecked, numTotal, checkedItems){
            return "Select Counties/Regional Districts (" + numChecked + " of " + numTotal + " selected)";
        },
        minWidth: 350,
        height: 350,
        click: function(event, ui){
            hideAll();
            var checked = $("#countyselect").multiselect("getChecked");
            $.each(checked, function(index, box){
                var label = $('#countyselect option[value="' + box.value + '"]').parent().attr("label");
                $(".Species." + box.value.replace(/\s/g, "") + label).show();
            });
            showNested();
        },
        checkAll: function(){
            var checked = $("#stateselect").multiselect("getChecked");
            $.each(checked, function(index, box){
                $(".Species." + box.value).show();
            });
            showNested();
        },
        uncheckAll: function(){
            hideAll();
        },
        optgrouptoggle: function(event, ui){
            hideAll();
            var checked = $("#countyselect").multiselect("getChecked");
            $.each(checked, function(index, box){
                var label = $('#countyselect option[value="' + box.value + '"]').parent().attr("label");
                $(".Species." + box.value.replace(/\s/g, "") + label).show();
            });
            showNested();
        }
    });

    $("#stateselect").multiselect({
        noneSelectedText: "Select States/Provinces &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (None selected)",
        selectedText: function(numChecked, numTotal, checkedItems){
            return "Select States/Provinces &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (" + numChecked + " of " + numTotal + " selected)";
        },
        minWidth: 350,
        height: 350,
        click: function(event, ui){
            hideAll();
            $(".countySel").remove();
            $("#countyselect").append(cSel);
            var cCk = "";
            var checked = $("#stateselect").multiselect("getChecked");
            $.each(checked, function(index, box){
                $(".Species." + box.value).show();
                cCk += (".countySel." + box.value +", ");
            });
            showNested();
            cCk = cCk.slice(0, -2);
            var cData = $(cCk).clone(true);
            $(".countySel").remove();
            $("#countyselect").append(cData);
            $("#countyselect").multiselect("refresh");
            $("#countyselect").multiselect("checkAll");
        },
        checkAll: function(){
            showAll();
            $(".countySel").remove();
            $("#countyselect").append(cSel);
            $("#countyselect").multiselect("refresh");
            $("#countyselect").multiselect("checkAll");
        },
        uncheckAll: function(){
            hideAll();
            $(".countySel").remove();
            $("#countyselect").multiselect("refresh");
        }
    });

    $("#stateselect").multiselect("checkAll");
});
