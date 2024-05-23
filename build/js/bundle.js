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
      delay: 3000
    },
    navigation: {
      nextEl: '.banners-list__arrow--next',
      prevEl: '.banners-list__arrow--prev'
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJzd2l0Y2hBc2lkZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInN3aXRjaEFzaWRlQnV0dG9uIiwic2lkZUJhcnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiZm9yRWFjaCIsInNpZGVCYXIiLCJoZWFkZXJCdXJnZXIiLCJidXJnZXIiLCJoZWFkZXJOYXYiLCJuZXdzU3dpcGVyIiwiU3dpcGVyIiwic2xpZGVzUGVyVmlldyIsImR5bmFtaWNCdWxsZXRzIiwic3BhY2VCZXR3ZWVuIiwiYXV0b3BsYXkiLCJkZWxheSIsIm5hdmlnYXRpb24iLCJuZXh0RWwiLCJwcmV2RWwiLCJicmVha3BvaW50cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQUEsTUFBTSxDQUFDQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsWUFBWTtFQUN4QztBQUNKO0FBQ0E7RUFDSSxJQUFNQyxXQUFXLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGtCQUFrQixDQUFDO0VBQzlELElBQU1DLGlCQUFpQixHQUFHRixRQUFRLENBQUNDLGFBQWEsQ0FBQyx5QkFBeUIsQ0FBQztFQUMzRSxJQUFNRSxRQUFRLEdBQUdILFFBQVEsQ0FBQ0ksZ0JBQWdCLENBQUMsbUJBQW1CLENBQUM7RUFFL0RMLFdBQVcsQ0FBQ0QsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQUk7SUFDdENJLGlCQUFpQixDQUFDRyxTQUFTLENBQUNDLE1BQU0sQ0FBQyxRQUFRLENBQUM7SUFDNUNILFFBQVEsQ0FBQ0ksT0FBTyxDQUFDLFVBQUFDLE9BQU8sRUFBSTtNQUN4QkEsT0FBTyxDQUFDSCxTQUFTLENBQUNDLE1BQU0sQ0FBQyxRQUFRLENBQUM7SUFDdEMsQ0FBQyxDQUFDO0VBQ04sQ0FBQyxDQUFDO0VBQ0YsSUFBTUcsWUFBWSxHQUFHVCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQztFQUM5RCxJQUFNUyxNQUFNLEdBQUdWLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGFBQWEsQ0FBQztFQUNwRCxJQUFNVSxTQUFTLEdBQUdYLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGFBQWEsQ0FBQztFQUV2RFEsWUFBWSxDQUFDWCxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBSTtJQUN2Q1ksTUFBTSxDQUFDTCxTQUFTLENBQUNDLE1BQU0sQ0FBQyxRQUFRLENBQUM7SUFDakNLLFNBQVMsQ0FBQ04sU0FBUyxDQUFDQyxNQUFNLENBQUMsUUFBUSxDQUFDO0VBQ3hDLENBQUMsQ0FBQztFQUNGO0VBQ0E7O0VBRUEsSUFBTU0sVUFBVSxHQUFHLElBQUlDLE1BQU0sQ0FBQyxtQkFBbUIsRUFBRTtJQUMvQ0MsYUFBYSxFQUFFLENBQUM7SUFDaEJDLGNBQWMsRUFBRSxJQUFJO0lBQ3BCQyxZQUFZLEVBQUUsRUFBRTtJQUVoQkMsUUFBUSxFQUFFO01BQ05DLEtBQUssRUFBRTtJQUNYLENBQUM7SUFFREMsVUFBVSxFQUFFO01BQ1JDLE1BQU0sRUFBRSw0QkFBNEI7TUFDcENDLE1BQU0sRUFBRTtJQUNaLENBQUM7SUFFREMsV0FBVyxFQUFFO01BQ1QsR0FBRyxFQUFFO1FBQ0RSLGFBQWEsRUFBRSxDQUFDO1FBQ2hCRSxZQUFZLEVBQUU7TUFDbEIsQ0FBQztNQUNELEdBQUcsRUFBRTtRQUNERixhQUFhLEVBQUUsQ0FBQztRQUNoQkUsWUFBWSxFQUFFO01BQ2xCLENBQUM7TUFDRCxHQUFHLEVBQUU7UUFDREYsYUFBYSxFQUFFLENBQUM7UUFDaEJFLFlBQVksRUFBRTtNQUNsQixDQUFDO01BQ0QsSUFBSSxFQUFFO1FBQ0ZGLGFBQWEsRUFBRSxDQUFDO1FBQ2hCRSxZQUFZLEVBQUU7TUFDbEIsQ0FBQztNQUNELElBQUksRUFBRTtRQUNGRixhQUFhLEVBQUUsQ0FBQztRQUNoQkUsWUFBWSxFQUFFO01BQ2xCO0lBQ0o7RUFDSixDQUFDLENBQUM7QUFDTixDQUFDLENBQUMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsid2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAvKlxyXG4gICAgLyAvPSAuLi8uLi9ub2RlX21vZHVsZXMvanF1ZXJ5L2Rpc3QvanF1ZXJ5LmpzXHJcbiAgICAgKi9cclxuICAgIGNvbnN0IHN3aXRjaEFzaWRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLWFzaWRlLXN3aXRjaCcpO1xyXG4gICAgY29uc3Qgc3dpdGNoQXNpZGVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtYXNpZGUtc3dpdGNoLWJ1dHRvbicpO1xyXG4gICAgY29uc3Qgc2lkZUJhcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuanMtYXNpZGUtd3JhcHBlcicpO1xyXG4gICAgXHJcbiAgICBzd2l0Y2hBc2lkZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XHJcbiAgICAgICAgc3dpdGNoQXNpZGVCdXR0b24uY2xhc3NMaXN0LnRvZ2dsZSgnLS1vcGVuJyk7XHJcbiAgICAgICAgc2lkZUJhcnMuZm9yRWFjaChzaWRlQmFyID0+IHtcclxuICAgICAgICAgICAgc2lkZUJhci5jbGFzc0xpc3QudG9nZ2xlKCctLWhpZGUnKTtcclxuICAgICAgICB9KTsgICAgXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGhlYWRlckJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX2J1cmdlcicpO1xyXG4gICAgY29uc3QgYnVyZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1cmdlci1idG4nKTtcclxuICAgIGNvbnN0IGhlYWRlck5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXItbmF2Jyk7XHJcbiAgICBcclxuICAgIGhlYWRlckJ1cmdlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XHJcbiAgICAgICAgYnVyZ2VyLmNsYXNzTGlzdC50b2dnbGUoJy0tb3BlbicpO1xyXG4gICAgICAgIGhlYWRlck5hdi5jbGFzc0xpc3QudG9nZ2xlKCctLWhpZGUnKTtcclxuICAgIH0pO1xyXG4gICAgLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cclxuICAgIC8qIGVzbGludC1kaXNhYmxlIGxpbmVicmVhay1zdHlsZSAqL1xyXG4gICAgXHJcbiAgICBjb25zdCBuZXdzU3dpcGVyID0gbmV3IFN3aXBlcignLmpzLWJhbm5lci1zbGlkZXInLCB7XHJcbiAgICAgICAgc2xpZGVzUGVyVmlldzogNCxcclxuICAgICAgICBkeW5hbWljQnVsbGV0czogdHJ1ZSxcclxuICAgICAgICBzcGFjZUJldHdlZW46IDI1LFxyXG4gICAgXHJcbiAgICAgICAgYXV0b3BsYXk6IHtcclxuICAgICAgICAgICAgZGVsYXk6IDMwMDAsXHJcbiAgICAgICAgfSxcclxuICAgIFxyXG4gICAgICAgIG5hdmlnYXRpb246IHtcclxuICAgICAgICAgICAgbmV4dEVsOiAnLmJhbm5lcnMtbGlzdF9fYXJyb3ctLW5leHQnLFxyXG4gICAgICAgICAgICBwcmV2RWw6ICcuYmFubmVycy1saXN0X19hcnJvdy0tcHJldicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBicmVha3BvaW50czoge1xyXG4gICAgICAgICAgICAzMjA6IHtcclxuICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgICAgICAgICAgICAgICBzcGFjZUJldHdlZW46IDIwLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICA2NDA6IHtcclxuICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgICAgICAgICAgICAgICBzcGFjZUJldHdlZW46IDIwLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICA3Njg6IHtcclxuICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDIsXHJcbiAgICAgICAgICAgICAgICBzcGFjZUJldHdlZW46IDEwLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAxMDI0OiB7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAzLFxyXG4gICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiA1MCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgMTIwMDoge1xyXG4gICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogNCxcclxuICAgICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMTAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgIH0pO1xyXG59KTsiXX0=
