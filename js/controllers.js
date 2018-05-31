'use strict';

/* Controllers */

var dietologyApp = angular.module('dietologyApp', ['ngRoute']);

dietologyApp.config(['$routeProvider', '$locationProvider', function($routeProvide, $locationProvider){
	/*$locationProvider.html5Mode({
		enabled: true,
		requiredBase: false
	});*/

	$routeProvide
		.when('/',{
			templateUrl: 'template/home.html',
			controller: 'HomeCtrl'
		})
		.when('/contact',{
			templateUrl: 'template/contact.html',
			controller: 'ContactCtrl'
		})
		.when('/review',{
			templateUrl: 'template/review.html',
			controller: 'ReviewCtrl'
		})
		.when('/seminar',{
			templateUrl: 'template/seminar.html',
			controller: 'SeminarCtrl'
		})
		.when('/courses-and-prices',{
			templateUrl: 'template/courses-and-prices.html',
			controller: 'Courses-and-pricesCtrl'
		})
		.when('/courses-and-prices/sport-dietolog',{
			templateUrl: 'template/courses-and-prices-list/sport-dietolog.html',
			controller: 'SportDietologCtrl'
		})
		.when('/blog',{
			templateUrl: 'template/blog.html',
			controller: 'BlogCtrl'
		})
		.when('/blog/the-best-diet',{
			templateUrl: 'template/blog-list/the-best-diet.html',
			controller: 'TheBestDietCtrl'
		})
		.otherwise({
			redirectTo: '/'
		});
}]);

dietologyApp.controller('HomeCtrl',['$scope','$http', '$location', function($scope, $http, $location) {

	//modal window show
	$('#training .button').click(function(event) {
		event.preventDefault();
		$('.modal').show('slow');
		$('.overlay-modal').show('slow');
	});
	//modal window hide
	$('.overlay-modal, .close').click(function(event) {
		event.preventDefault();
		$('.modal').hide('slow');
		$('.overlay-modal').hide('slow');
	});


	$( function() {
		var handleAge = $( "#age #custom-handle span" );
		$( "#age" ).slider({
			range: "min",
			value: 40,
			min: 1,
			max: 100,
			create: function() {
				handleAge.text( $( this ).slider( "value" ) );
			},
			slide: function( event, ui ) {
				$( "#amount" ).val( ui.value );
				handleAge.text( ui.value );
			}
		});
		var handleWeight = $( "#weight #custom-handle span" );
		$( "#weight" ).slider({
			range: "min",
			value: 55,
			min: 1,
			max: 100,
			create: function() {
				handleWeight.text( $( this ).slider( "value" ) );
			},
			slide: function( event, ui ) {
				$( "#amount" ).val( ui.value );
				handleWeight.text( ui.value );
			}
		});
		var handleHeight = $( "#height #custom-handle span" );
		$( "#height" ).slider({
			range: "min",
			value: 170,
			min: 1,
			max: 250,
			create: function() {
				handleHeight.text( $( this ).slider( "value" ) );
			},
			slide: function( event, ui ) {
				$( "#amount" ).val( ui.value );
				handleHeight.text( ui.value );
			}
		});
	} );
	$( function() {
		var select = $( "#minbeds" );
		var slider = $( "<div id='slider'></div>" ).insertAfter( select ).slider({
			min: 1,
			max: 3,
			range: "min",
			value: select[ 0 ].selectedIndex + 1,
			slide: function( event, ui ) {
				select[ 0 ].selectedIndex = ui.value - 1;
			}
		});
		$( "#minbeds" ).on( "change", function() {
			slider.slider( "value", this.selectedIndex + 1 );
		});
	} );

	$('.docum').slick({
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 6,
		slidesToScroll: 1,
		responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 5,
			}
		},
		{
			breakpoint: 850,
			settings: {
				slidesToShow: 4,
			}
		},
		{
			breakpoint: 750,
			settings: {
				slidesToShow: 3,
			}
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 2,
				autoplay: true,
				autoplaySpeed: 2000,
			}
		},
		{
			breakpoint: 500,
			settings: {
				slidesToShow: 1,
				autoplay: true,
				autoplaySpeed: 2000,
			}
		}
    ]
});

}]);

dietologyApp.controller('ContactCtrl',['$scope','$http', '$location', function($scope, $http, $location) {

}]);

dietologyApp.controller('ReviewCtrl',['$scope','$http', '$location', function($scope, $http, $location) {

}]);

dietologyApp.controller('SeminarCtrl',['$scope','$http', '$location', function($scope, $http, $location) {

}]);

dietologyApp.controller('Courses-and-pricesCtrl',['$scope','$http', '$location', function($scope, $http, $location) {

}]);

dietologyApp.controller('SportDietologCtrl',['$scope','$http', '$location', function($scope, $http, $location) {

}]);

dietologyApp.controller('BlogCtrl',['$scope','$http', '$location', function($scope, $http, $location) {

	$('#blog .content .list').on('click','li', function (event) {
	   $(this).closest('.list').find('li').removeClass('active');
	   $(this).addClass('active');
	   if ($(this).hasClass('active') && $(this).hasClass('training')) {
	   	$(this).closest('.list').next('.box').children('div').hide('slow');
	   	$(this).closest('.list').next('.box').children('.training').show('slow');
	   }
	   if ($(this).hasClass('active') && $(this).hasClass('exercises')) {
	   	$(this).closest('.list').next('.box').children('div').hide('slow');
	   	$(this).closest('.list').next('.box').children('.exercises').show('slow');
	   }
	});

	$http.get('blog-archive/popularArticles.json').success(function(data, status, headers, config) {
		$scope.popularArticles = data;
	});
	$http.get('blog-archive/trainings.json').success(function(data, status, headers, config) {
		$scope.trainings = data;
	});
	$http.get('blog-archive/exercises.json').success(function(data, status, headers, config) {
		$scope.exercises = data;
	});

}]);

dietologyApp.controller('TheBestDietCtrl',['$scope','$http', '$location', function($scope, $http, $location) {

}]);