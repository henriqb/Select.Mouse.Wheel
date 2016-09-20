(function () {
    $(document).ready(function () {
        $('select').on('mousewheel DOMMouseScroll', function (e) {
            var select = $(this);
            var options = select.find('option');
            var selected;
            for (var i = 0; i < options.length; i++) {
                selected = options.eq(i);
                if (selected.is(':selected')) { break; }
            }
            if (e.originalEvent.wheelDelta > 0)
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
