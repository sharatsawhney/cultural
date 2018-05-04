function slideCarousels(ids, action) {
            var len = ids.length;
            var id = null;

            for (var i = 0; i < len; i++) {
                id = ids[i];
                $('#' + id).carousel({ slide: action });
            }
        }
