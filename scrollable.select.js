(function () {
    $(document).ready(function () {
        $('select').on('mousewheel DOMMouseScroll'/* DOMMouseScroll: Firefox */, function (e) {
            var select = $(this);
            var options = select.find('option');
            var selected;
            for (var i = 0; i < options.length; i++) {
                selected = options.eq(i);
                if (selected.is(':selected')) { break; }
            }
            if ((e.originalEvent.wheelDelta > 0 /* All other browsers */) || (e.originalEvent.detail < 0 /* Firefox */))
            {
                selected.prev().prop('selected', true);

            } else {
                selected.next().prop('selected', true);
            }
            e.preventDefault ? e.preventDefault() : e.returnValue = false;
            return false;
        });
    });
})();
