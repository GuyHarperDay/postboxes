"use strict";$(function(){console.log("JS loaded");var n=$(".map"),o=null,t=null,l={lat:51.515213,lng:-.072331};o=new google.maps.Map(n.get(0),{zoom:14,center:l}),$.get("/postboxes").done(function(n){(t=n).filter(function(n){return Math.abs(n.lng-l.lng)<.005&&Math.abs(n.lat-l.lat)<.005}).forEach(function(n){!function(n){var t={lat:n.lat,lng:n.lng};new google.maps.Marker({position:t,map:o})}(n)})})});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyIkIiwiY29uc29sZSIsImxvZyIsIm1hcCIsIiRtYXAiLCJsYXQiLCJsbmciLCJnb29nbGUiLCJtYXBzIiwiTWFwIiwiZ2V0Iiwiem9vbSIsImluaXRpYWxpemVNYXAiLCJkb25lIiwiZ2V0UG9zdGJveGVzIiwicmVzcG9uc2UiLCJmaWx0ZXIiLCJsb2NhdGlvbiIsIm5lYXJieVBvc3Rib3hMb2NhdGlvbnMiLCJsb2NhdGlvbnMiLCJhYnMiLCJsb2NhbGl0eSIsImZvckVhY2giLCJsYXRMbmciLCJwb3NpdGlvbiIsIm1hcmtlciJdLCJtYXBwaW5ncyI6ImFBQ0FBLEVBQUUsV0FERkMsUUFBQUMsSUFBQSxhQUVFRCxJQUFBQSxFQUFZRCxFQUFBLFFBR1JHLEVBQU0sS0FESkMsRUFBUyxLQUNYRCxHQUFKRSxJQUFBLFVBQUFDLEtBQUEsU0FLRUgsRUFBTSxJQUFJSSxPQUFPQyxLQUFLQyxJQUFJTCxFQUFLTSxJQUFJLElBRHJDQyxLQUFTQyxHQUNQVCxPQUFVSSxJQU9WUCxFQUFFVSxJQUFJLGNBRFJHLEtBQVNDLFNBQUFBLElBQ0xKLEVBQUlLLEdBT2NDLE9BQUEsU0FBQUMsR0FDcEIsT0FBTUMsS0FBQUEsSUFBQUEsRUFBQUEsSUFBeUJDLEVBQVVILEtBQU8sTUFBQ0MsS0FBYUcsSUFBQUgsRUFBQVosSUFBQWdCLEVBQUFoQixLQUFBLE9BQTlEaUIsUUFBQSxTQUFBTCxJQVFGLFNBQW9CQSxHQUFwQixJQUFBTSxHQUFBbEIsSUFBb0JZLEVBQVVaLElBQUFDLElBQUFXLEVBQUFYLEtBQ1hELElBQUFBLE9BQUtZLEtBQVNaLFFBQy9CbUIsU0FBTUMsRUFDSkQsSUFBQUEsSUFSRk4sQ0FBQUEiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZ2xvYmFsIGdvb2dsZTppZ25vcmUgKi9cbiQoKCkgPT4ge1xuICBjb25zb2xlLmxvZygnSlMgbG9hZGVkJyk7XG5cbiAgY29uc3QgJG1hcCA9ICQoJy5tYXAnKTtcbiAgbGV0IG1hcCA9IG51bGw7XG4gIGxldCBsb2NhdGlvbnMgPSBudWxsO1xuICBsZXQgbG9jYWxpdHkgPSB7IGxhdDogNTEuNTE1MjEzLCBsbmc6IC0wLjA3MjMzMSB9O1xuXG4gIGZ1bmN0aW9uIGluaXRpYWxpemVNYXAoKSB7XG4gICAgbWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcCgkbWFwLmdldCgwKSwge1xuICAgICAgem9vbTogMTQsXG4gICAgICBjZW50ZXI6IGxvY2FsaXR5XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRQb3N0Ym94ZXMoKSB7XG4gICAgJC5nZXQoJy9wb3N0Ym94ZXMnKVxuICAgICAgLmRvbmUoKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGxvY2F0aW9ucyA9IHJlc3BvbnNlO1xuICAgICAgICBmaW5kTmVhcmJ5KCk7XG4gICAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZpbmROZWFyYnkoKSB7XG4gICAgY29uc3QgbmVhcmJ5UG9zdGJveExvY2F0aW9ucyA9IGxvY2F0aW9ucy5maWx0ZXIoKGxvY2F0aW9uKSA9PiB7XG4gICAgICByZXR1cm4gKE1hdGguYWJzKGxvY2F0aW9uLmxuZyAtIGxvY2FsaXR5LmxuZykgPCAwLjAwNSkgJiYgKE1hdGguYWJzKGxvY2F0aW9uLmxhdCAtIGxvY2FsaXR5LmxhdCkgPCAwLjAwNSk7XG4gICAgfSk7XG4gICAgbmVhcmJ5UG9zdGJveExvY2F0aW9ucy5mb3JFYWNoKChsb2NhdGlvbikgPT4ge1xuICAgICAgc2hvd01hcmtlcihsb2NhdGlvbik7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBzaG93TWFya2VyKGxvY2F0aW9uKSB7XG4gICAgY29uc3QgbGF0TG5nID0geyBsYXQ6IGxvY2F0aW9uLmxhdCwgbG5nOiBsb2NhdGlvbi5sbmcgfTtcbiAgICBjb25zdCBtYXJrZXIgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKHtcbiAgICAgIHBvc2l0aW9uOiBsYXRMbmcsXG4gICAgICBtYXA6IG1hcFxuICAgIH0pO1xuICB9XG5cbiAgaW5pdGlhbGl6ZU1hcCgpO1xuICBnZXRQb3N0Ym94ZXMoKTtcbn0pO1xuIl19
