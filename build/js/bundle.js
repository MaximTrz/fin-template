"use strict";

window.addEventListener('load', function () {
  /*
  / /= ../../node_modules/jquery/dist/jquery.js
   */
  var switchAside = document.querySelector('.js-aside-switch');
  var switchAsideButton = document.querySelector('.js-aside-switch-button');
  var sideBars = document.querySelectorAll('.js-aside-wrapper');
  switchAside.addEventListener('click', function () {
    switchAsideButton.classList.toggle('--open');
    sideBars.forEach(function (sideBar) {
      sideBar.classList.toggle('--hide');
    });
  });
  var headerBurger = document.querySelector('.header__burger');
  var burger = document.querySelector('.burger-btn');
  var headerNav = document.querySelector('.header-nav');
  headerBurger.addEventListener('click', function () {
    burger.classList.toggle('--open');
    headerNav.classList.toggle('--hide');
  });
  /* eslint-disable no-unused-vars */
  /* eslint-disable linebreak-style */

  var newsSwiper = new Swiper('.js-banner-slider', {
    slidesPerView: 4,
    dynamicBullets: true,
    spaceBetween: 25,
    autoplay: {
      delay: 1000
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      640: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 10
      }
    }
  });
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJzd2l0Y2hBc2lkZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInN3aXRjaEFzaWRlQnV0dG9uIiwic2lkZUJhcnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiZm9yRWFjaCIsInNpZGVCYXIiLCJoZWFkZXJCdXJnZXIiLCJidXJnZXIiLCJoZWFkZXJOYXYiLCJuZXdzU3dpcGVyIiwiU3dpcGVyIiwic2xpZGVzUGVyVmlldyIsImR5bmFtaWNCdWxsZXRzIiwic3BhY2VCZXR3ZWVuIiwiYXV0b3BsYXkiLCJkZWxheSIsImJyZWFrcG9pbnRzIl0sIm1hcHBpbmdzIjoiOztBQUFBQSxNQUFNLENBQUNDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxZQUFZO0VBQ3hDO0FBQ0o7QUFDQTtFQUNJLElBQU1DLFdBQVcsR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsa0JBQWtCLENBQUM7RUFDOUQsSUFBTUMsaUJBQWlCLEdBQUdGLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLHlCQUF5QixDQUFDO0VBQzNFLElBQU1FLFFBQVEsR0FBR0gsUUFBUSxDQUFDSSxnQkFBZ0IsQ0FBQyxtQkFBbUIsQ0FBQztFQUUvREwsV0FBVyxDQUFDRCxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBSTtJQUN0Q0ksaUJBQWlCLENBQUNHLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLFFBQVEsQ0FBQztJQUM1Q0gsUUFBUSxDQUFDSSxPQUFPLENBQUMsVUFBQUMsT0FBTyxFQUFJO01BQ3hCQSxPQUFPLENBQUNILFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLFFBQVEsQ0FBQztJQUN0QyxDQUFDLENBQUM7RUFDTixDQUFDLENBQUM7RUFDRixJQUFNRyxZQUFZLEdBQUdULFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGlCQUFpQixDQUFDO0VBQzlELElBQU1TLE1BQU0sR0FBR1YsUUFBUSxDQUFDQyxhQUFhLENBQUMsYUFBYSxDQUFDO0VBQ3BELElBQU1VLFNBQVMsR0FBR1gsUUFBUSxDQUFDQyxhQUFhLENBQUMsYUFBYSxDQUFDO0VBRXZEUSxZQUFZLENBQUNYLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFJO0lBQ3ZDWSxNQUFNLENBQUNMLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLFFBQVEsQ0FBQztJQUNqQ0ssU0FBUyxDQUFDTixTQUFTLENBQUNDLE1BQU0sQ0FBQyxRQUFRLENBQUM7RUFDeEMsQ0FBQyxDQUFDO0VBQ0Y7RUFDQTs7RUFFQSxJQUFNTSxVQUFVLEdBQUcsSUFBSUMsTUFBTSxDQUFDLG1CQUFtQixFQUFFO0lBQy9DQyxhQUFhLEVBQUUsQ0FBQztJQUNoQkMsY0FBYyxFQUFFLElBQUk7SUFDcEJDLFlBQVksRUFBRSxFQUFFO0lBRWhCQyxRQUFRLEVBQUU7TUFDTkMsS0FBSyxFQUFFO0lBQ1gsQ0FBQztJQUVEQyxXQUFXLEVBQUU7TUFDVCxHQUFHLEVBQUU7UUFDREwsYUFBYSxFQUFFLENBQUM7UUFDaEJFLFlBQVksRUFBRTtNQUNsQixDQUFDO01BQ0QsR0FBRyxFQUFFO1FBQ0RGLGFBQWEsRUFBRSxDQUFDO1FBQ2hCRSxZQUFZLEVBQUU7TUFDbEIsQ0FBQztNQUNELEdBQUcsRUFBRTtRQUNERixhQUFhLEVBQUUsQ0FBQztRQUNoQkUsWUFBWSxFQUFFO01BQ2xCLENBQUM7TUFDRCxJQUFJLEVBQUU7UUFDRkYsYUFBYSxFQUFFLENBQUM7UUFDaEJFLFlBQVksRUFBRTtNQUNsQixDQUFDO01BQ0QsSUFBSSxFQUFFO1FBQ0ZGLGFBQWEsRUFBRSxDQUFDO1FBQ2hCRSxZQUFZLEVBQUU7TUFDbEI7SUFDSjtFQUNKLENBQUMsQ0FBQztBQUNOLENBQUMsQ0FBQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIC8qXHJcbiAgICAvIC89IC4uLy4uL25vZGVfbW9kdWxlcy9qcXVlcnkvZGlzdC9qcXVlcnkuanNcclxuICAgICAqL1xyXG4gICAgY29uc3Qgc3dpdGNoQXNpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtYXNpZGUtc3dpdGNoJyk7XHJcbiAgICBjb25zdCBzd2l0Y2hBc2lkZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1hc2lkZS1zd2l0Y2gtYnV0dG9uJyk7XHJcbiAgICBjb25zdCBzaWRlQmFycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy1hc2lkZS13cmFwcGVyJyk7XHJcbiAgICBcclxuICAgIHN3aXRjaEFzaWRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcclxuICAgICAgICBzd2l0Y2hBc2lkZUJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKCctLW9wZW4nKTtcclxuICAgICAgICBzaWRlQmFycy5mb3JFYWNoKHNpZGVCYXIgPT4ge1xyXG4gICAgICAgICAgICBzaWRlQmFyLmNsYXNzTGlzdC50b2dnbGUoJy0taGlkZScpO1xyXG4gICAgICAgIH0pOyAgICBcclxuICAgIH0pO1xyXG4gICAgY29uc3QgaGVhZGVyQnVyZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fYnVyZ2VyJyk7XHJcbiAgICBjb25zdCBidXJnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnVyZ2VyLWJ0bicpO1xyXG4gICAgY29uc3QgaGVhZGVyTmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlci1uYXYnKTtcclxuICAgIFxyXG4gICAgaGVhZGVyQnVyZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcclxuICAgICAgICBidXJnZXIuY2xhc3NMaXN0LnRvZ2dsZSgnLS1vcGVuJyk7XHJcbiAgICAgICAgaGVhZGVyTmF2LmNsYXNzTGlzdC50b2dnbGUoJy0taGlkZScpO1xyXG4gICAgfSk7XHJcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xyXG4gICAgLyogZXNsaW50LWRpc2FibGUgbGluZWJyZWFrLXN0eWxlICovXHJcbiAgICBcclxuICAgIGNvbnN0IG5ld3NTd2lwZXIgPSBuZXcgU3dpcGVyKCcuanMtYmFubmVyLXNsaWRlcicsIHtcclxuICAgICAgICBzbGlkZXNQZXJWaWV3OiA0LFxyXG4gICAgICAgIGR5bmFtaWNCdWxsZXRzOiB0cnVlLFxyXG4gICAgICAgIHNwYWNlQmV0d2VlbjogMjUsXHJcbiAgICBcclxuICAgICAgICBhdXRvcGxheToge1xyXG4gICAgICAgICAgICBkZWxheTogMTAwMCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGJyZWFrcG9pbnRzOiB7XHJcbiAgICAgICAgICAgIDMyMDoge1xyXG4gICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMSxcclxuICAgICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMjAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIDY0MDoge1xyXG4gICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMSxcclxuICAgICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMjAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIDc2ODoge1xyXG4gICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMTAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIDEwMjQ6IHtcclxuICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDMsXHJcbiAgICAgICAgICAgICAgICBzcGFjZUJldHdlZW46IDUwLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAxMjAwOiB7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiA0LFxyXG4gICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAxMCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgfSk7XHJcbn0pOyJdfQ==
