<<<<<<< HEAD
"use strict";$(function(){console.log("JS loaded");var n=$(".map"),o=null,t=null,l={lat:51.515213,lng:-.072331};o=new google.maps.Map(n.get(0),{zoom:14,center:l}),$.get("/postboxes").done(function(n){(t=n).filter(function(n){return Math.abs(n.lng-l.lng)<.005&&Math.abs(n.lat-l.lat)<.005}).forEach(function(n){!function(n){var t={lat:n.lat,lng:n.lng};new google.maps.Marker({position:t,map:o})}(n)})})});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyIkIiwiY29uc29sZSIsImxvZyIsIm1hcCIsIiRtYXAiLCJsYXQiLCJsbmciLCJnb29nbGUiLCJtYXBzIiwiTWFwIiwiZ2V0Iiwiem9vbSIsImluaXRpYWxpemVNYXAiLCJkb25lIiwiZ2V0UG9zdGJveGVzIiwicmVzcG9uc2UiLCJmaWx0ZXIiLCJsb2NhdGlvbiIsIm5lYXJieVBvc3Rib3hMb2NhdGlvbnMiLCJsb2NhdGlvbnMiLCJhYnMiLCJsb2NhbGl0eSIsImZvckVhY2giLCJsYXRMbmciLCJwb3NpdGlvbiIsIm1hcmtlciJdLCJtYXBwaW5ncyI6ImFBQ0FBLEVBQUUsV0FERkMsUUFBQUMsSUFBQSxhQUVFRCxJQUFBQSxFQUFZRCxFQUFBLFFBR1JHLEVBQU0sS0FESkMsRUFBUyxLQUNYRCxHQUFKRSxJQUFBLFVBQUFDLEtBQUEsU0FLRUgsRUFBTSxJQUFJSSxPQUFPQyxLQUFLQyxJQUFJTCxFQUFLTSxJQUFJLElBRHJDQyxLQUFTQyxHQUNQVCxPQUFVSSxJQU9aUCxFQUFFVSxJQUFJLGNBRE5HLEtBQUEsU0FBU0MsSUFDUEosRUFBSUssR0FPZ0JDLE9BQUEsU0FBQUMsR0FDcEIsT0FBTUMsS0FBQUEsSUFBQUEsRUFBQUEsSUFBeUJDLEVBQVVILEtBQU8sTUFBQ0MsS0FBYUcsSUFBQUgsRUFBQVosSUFBQWdCLEVBQUFoQixLQUFBLE9BQTlEaUIsUUFBQSxTQUFBTCxJQVFGLFNBQW9CQSxHQUFwQixJQUFBTSxHQUFBbEIsSUFBb0JZLEVBQVVaLElBQUFDLElBQUFXLEVBQUFYLEtBQ1hELElBQUFBLE9BQUtZLEtBQVNaLFFBQy9CbUIsU0FBTUMsRUFDSkQsSUFBQUEsSUFSRk4sQ0FBQUEiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZ2xvYmFsIGdvb2dsZTppZ25vcmUgKi9cbiQoKCkgPT4ge1xuICBjb25zb2xlLmxvZygnSlMgbG9hZGVkJyk7XG5cbiAgY29uc3QgJG1hcCA9ICQoJy5tYXAnKTtcbiAgbGV0IG1hcCA9IG51bGw7XG4gIGxldCBsb2NhdGlvbnMgPSBudWxsO1xuICBsZXQgbG9jYWxpdHkgPSB7IGxhdDogNTEuNTE1MjEzLCBsbmc6IC0wLjA3MjMzMSB9O1xuXG4gIGZ1bmN0aW9uIGluaXRpYWxpemVNYXAoKSB7XG4gICAgbWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcCgkbWFwLmdldCgwKSwge1xuICAgICAgem9vbTogMTQsXG4gICAgICBjZW50ZXI6IGxvY2FsaXR5XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRQb3N0Ym94ZXMoKSB7XG4gICQuZ2V0KCcvcG9zdGJveGVzJylcbiAgICAuZG9uZSgocmVzcG9uc2UpID0+IHtcbiAgICAgIGxvY2F0aW9ucyA9IHJlc3BvbnNlO1xuICAgICAgZmluZE5lYXJieSgpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gZmluZE5lYXJieSgpIHtcbiAgICBjb25zdCBuZWFyYnlQb3N0Ym94TG9jYXRpb25zID0gbG9jYXRpb25zLmZpbHRlcigobG9jYXRpb24pID0+IHtcbiAgICAgIHJldHVybiAoTWF0aC5hYnMobG9jYXRpb24ubG5nIC0gbG9jYWxpdHkubG5nKSA8IDAuMDA1KSAmJiAoTWF0aC5hYnMobG9jYXRpb24ubGF0IC0gbG9jYWxpdHkubGF0KSA8IDAuMDA1KTtcbiAgICB9KTtcbiAgICBuZWFyYnlQb3N0Ym94TG9jYXRpb25zLmZvckVhY2goKGxvY2F0aW9uKSA9PiB7XG4gICAgICBzaG93TWFya2VyKGxvY2F0aW9uKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNob3dNYXJrZXIobG9jYXRpb24pIHtcbiAgICBjb25zdCBsYXRMbmcgPSB7IGxhdDogbG9jYXRpb24ubGF0LCBsbmc6IGxvY2F0aW9uLmxuZyB9O1xuICAgIGNvbnN0IG1hcmtlciA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIoe1xuICAgICAgcG9zaXRpb246IGxhdExuZyxcbiAgICAgIG1hcDogbWFwXG4gICAgfSk7XG4gIH1cblxuICBpbml0aWFsaXplTWFwKCk7XG4gIGdldFBvc3Rib3hlcygpO1xufSk7XG4iXX0=
=======
/* global google:ignore */
$(() => {
  console.log('JS loaded');

  const $map = $('.map');
  let map = null;
  let locations = null;
  let locality = { lat: 51.515213, lng: -0.072331 };

  function initializeMap() {
    map = new google.maps.Map($map.get(0), {
      zoom: 14,
      center: locality
    });
  }

  function getPostboxes() {
  $.get('/postboxes')
    .done((response) => {
      locations = response;
      findNearby();
    });
  }

  function findNearby() {
    const nearbyPostboxLocations = locations.filter((location) => {
      return (Math.abs(location.lng - locality.lng) < 0.005) && (Math.abs(location.lat - locality.lat) < 0.005);
    });
    nearbyPostboxLocations.forEach((location) => {
      showMarker(location);
    });
  }

  function showMarker(location) {
    const latLng = { lat: location.lat, lng: location.lng };
    const marker = new google.maps.Marker({
      position: latLng,
      map: map
    });
  }

  initializeMap();
  getPostboxes();
});
>>>>>>> c8c375a1fe9f56492edc14ce62a031d50ac96b6c
