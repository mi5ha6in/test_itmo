ymaps.ready(function () {
  var myMap = new ymaps.Map('map', {
      center: [59.956170, 30.309360],
      zoom: 18,
      controls: []
  });
  myMap.behaviors.disable('scrollZoom');
  myPlacemark = new ymaps.Placemark(
      [59.956170, 30.309360] , {
          iconCaption: 'Кронверский проспект, 49'
      }, {
          iconColor: '#f21f5b'
      });
  myMap.geoObjects.add(myPlacemark);
});
