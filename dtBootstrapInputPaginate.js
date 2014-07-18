
$.fn.dataTableExt.oPagination.bootstrapInput = {
    "fnInit": function (oSettings, nPaging, fnCallbackDraw) {

        if (oSettings.sTableId == '') {
            alert("DEVELOPER:  YOU MUST SET AN ID ON THE DATATABLE FOR THE PAGER TO WORK");
            return;
        }


        var nFirst = $("<span />");
        var nPrevious = $("<span />");
        var nNext = $("<span />");
        var nLast = $("<span />");
        var nTextbox = $('<input type="text" />');
        var nTextboxPrefix = $("<span />");
        var nTextboxSuffix = $("<span />");
        var dFirst = $("<span />");
        var dNext = $("<span />");
        var dPrevious = $("<span />");
        var dLast = $("<span />");


        nFirst.addClass("paginate_button first glyphicon glyphicon-step-backward");
        nPrevious.addClass("paginate_button previous glyphicon glyphicon-chevron-left");
        nNext.addClass("paginate_button next glyphicon glyphicon-chevron-right");
        nLast.addClass("paginate_button last glyphicon glyphicon-step-forward");


        //In case you want to use your own CSS to override my defaults font-size and widths
        nTextboxPrefix.addClass("paginate_prefix");
        nTextboxSuffix.addClass("paginate_suffix")
        nTextbox.addClass("paginate_textbox");


        //these span icons will be hidden by default
        dFirst.addClass("glyphicon glyphicon-step-backward hide");
        dNext.addClass("glyphicon glyphicon-chevron-right hide");
        dPrevious.addClass("glyphicon glyphicon-chevron-left hide");
        dLast.addClass("glyphicon glyphicon-step-forward hide");

        //nFirst, nPrevious, nNext and nLast get some additional styling from the datatable css file:  .dataTables_wrapper .dataTables_paginate .paginate_button
        //Let's mimick that.  We don't want to use the same classes because they have a hover effect that shouldn't exist for disabled buttons.
        dFirst.css('width', 44)
            .css('text-align', 'center')
            .css('padding-left', 14)
            .css('padding-right', 14)
            .css('margin-left', 2);

        dNext.css('width', 44)
            .css('text-align', 'center')
            .css('padding-left', 14)
            .css('padding-right', 14)
            .css('margin-left', 2);

        dPrevious.css('width', 44)
            .css('text-align', 'center')
            .css('padding-left', 14)
            .css('padding-right', 14)
            .css('margin-left', 2);

        dLast.css('width', 44)
            .css('text-align', 'center')
            .css('padding-left', 14)
            .css('padding-right', 14)
            .css('margin-left', 2);

        //make the icons look disabled
        dFirst.css('color', '#CCC');
        dNext.css('color', '#CCC');
        dPrevious.css('color', '#CCC');
        dLast.css('color', '#CCC');



        //Setting an id
        //$(nPaging).attr('id', oSettings.sTableId + '_paginate');

        nFirst.attr('id', oSettings.sTableId + '_first');
        nPrevious.attr('id', oSettings.sTableId + '_previous');
        nNext.attr('id', oSettings.sTableId + '_next');
        nLast.attr('id', oSettings.sTableId + '_last');

        dFirst.attr('id', oSettings.sTableId + '_disabled_first');
        dPrevious.attr('id', oSettings.sTableId + '_disabled_previous');
        dNext.attr('id', oSettings.sTableId + '_disabled_next');
        dLast.attr('id', oSettings.sTableId + '_disabled_last');

        nTextbox.attr("id", oSettings.sTableId + "_pager_input");
        nTextboxSuffix.attr('id', oSettings.sTableId + '_pager_input_suffix');


        //styling the input
        nTextbox.addClass("form-control")
            .css("width", 70)
            .css("display", "inline");


        nTextboxPrefix.html("Page")
            .css('padding-right', 3);


        //adding the elements to the pager
        $(nPaging).append(nFirst)
            .append(dFirst)
            .append(nPrevious)
            .append(dPrevious)
            .append(nTextboxPrefix)
            .append(nTextbox)
            .append(nTextboxSuffix)
            .append(nNext)
            .append(dNext)
            .append(nLast)
            .append(dLast);


        //Make the icons clickable
        nFirst.click(function () {
            oSettings.oApi._fnPageChange(oSettings, "first");
            fnCallbackDraw(oSettings);
        });

        nPrevious.click(function () {
            oSettings.oApi._fnPageChange(oSettings, "previous");
            fnCallbackDraw(oSettings);
        });

        nNext.click(function () {
            oSettings.oApi._fnPageChange(oSettings, "next");
            fnCallbackDraw(oSettings);
        });

        nLast.click(function () {
            oSettings.oApi._fnPageChange(oSettings, "last");
            fnCallbackDraw(oSettings);
        });


        //only type numbers (no negatives)
        nTextbox.keypress(function (e) {
            var e = window.event || e;
            var keyunicode = e.charCode || e.keyCode;
            if (String.fromCharCode(keyunicode).match(/[^0-9]/g)) {
                return false;
            }
        });


        //Type a number in the textbox followed by ENTER to navigate to that page
        //If drag and dropping or copy and pasting you still need to press ENTER.
        nTextbox.keyup(function (e) {
            if (e.which != 13) {
                return;
            }

            var iNewStart = oSettings._iDisplayLength * (this.value - 1);
            if (iNewStart > oSettings.fnRecordsDisplay()) {

                oSettings._iDisplayStart = (Math.ceil((oSettings.fnRecordsDisplay() - 1) /
					oSettings._iDisplayLength) - 1) * oSettings._iDisplayLength;
                fnCallbackDraw(oSettings);
                return;
            }

            oSettings._iDisplayStart = iNewStart;
            fnCallbackDraw(oSettings);
        });


    },


    //Called each time the grid is updated (i.e., length changed)
    "fnUpdate": function (oSettings, fnCallbackDraw) {
        if (!oSettings.aanFeatures.p) {
            return;
        }
        if (oSettings.sTableId == '') {
            return;
        }

        var iPages;
        if (oSettings._iDisplayLength == -1) {
            iPages = 1;
        } else {
            iPages = Math.ceil((oSettings.fnRecordsDisplay()) / oSettings._iDisplayLength);
        }
        var iCurrentPage = Math.ceil(oSettings._iDisplayStart / oSettings._iDisplayLength) + 1;



        var textbox = $("#" + oSettings.sTableId + '_pager_input');
        var textboxSuffix = $("#" + oSettings.sTableId + '_pager_input_suffix');
        var nFirst = $('#' + oSettings.sTableId + '_first');
        var nPrevious = $('#' + oSettings.sTableId + '_previous');
        var nNext = $('#' + oSettings.sTableId + '_next');
        var nLast = $('#' + oSettings.sTableId + '_last');
        var dFirst = $('#' + oSettings.sTableId + '_disabled_first');
        var dPrevious = $('#' + oSettings.sTableId + '_disabled_previous');
        var dNext = $('#' + oSettings.sTableId + '_disabled_next');
        var dLast = $('#' + oSettings.sTableId + '_disabled_last');


        if ((iCurrentPage == 1) && (iPages > 1)) {
            /* DISPLAYING THE FIRST PAGE */
            nFirst.addClass('hide');
            nPrevious.addClass('hide');
            nNext.removeClass('hide');
            nLast.removeClass('hide');

            dFirst.removeClass('hide');
            dPrevious.removeClass('hide');
            dNext.addClass('hide');
            dLast.addClass('hide');

            textbox.removeAttr('readonly');
        } else if ((iCurrentPage > 1) && (iCurrentPage < iPages)) {
            /* IN BETWEEN THE FIRST AND LAST PAGE */
            nFirst.removeClass('hide');
            nPrevious.removeClass('hide');
            nNext.removeClass('hide');
            nLast.removeClass('hide');

            dFirst.addClass('hide');
            dPrevious.addClass('hide');
            dNext.addClass('hide');
            dLast.addClass('hide');

            textbox.removeAttr('readonly');
        } else if ((iCurrentPage == iPages) && (iPages != 1)) {
            /* DISPLAYING THE LAST PAGE */
            nFirst.removeClass('hide');
            nPrevious.removeClass('hide');
            nNext.addClass('hide');
            nLast.addClass('hide');

            dFirst.addClass('hide');
            dPrevious.addClass('hide');
            dNext.removeClass('hide');
            dLast.removeClass('hide');

            textbox.removeAttr('readonly');
        } else {
            /* DISPLAYING ALL RECORDS ON A SINGLE PAGE */
            nFirst.addClass('hide');
            nPrevious.addClass('hide');
            nNext.addClass('hide');
            nLast.addClass('hide');

            dFirst.removeClass('hide');
            dPrevious.removeClass('hide');
            dNext.removeClass('hide');
            dLast.removeClass('hide');

            textbox.attr('readonly', 'readonly');  //don't allow them to alter the number.  It should remain 1 of 1.
        }


        //Updating the number of pages and the number in the textbox (if necessary)
        textboxSuffix.html(" of " + ("" + iPages).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") + " pages");  //adding commmas to large numbers
        textbox.val(iCurrentPage);
    }
};


