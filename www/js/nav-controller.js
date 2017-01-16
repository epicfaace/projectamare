angular.module('navController', [])
	.controller('nav', function($scope, $state) {
		$scope.title = 'Project Amare';

		// returns true if the current router url matches the passed in url
		// so views can set 'active' on links easily
		$scope.isUrl = function(url) {
			if (url === '#') return false;
			return ('#' + $state.$current.url.source + '/').indexOf(url + '/') === 0;
		};

		$scope.pages = [
			{
				name: 'Home',
				url: '#/'
			},
			{
				name: 'Our Champions',
				url: '#/about'
			},
			{
				name: 'Login',
				url: '#/contact'
			},
			{
				name: 'The Latest Research',
				url: '#/theme'
			},
			{
				name: 'Blog',
				url: '#/blog'
			},
			{
				name: 'Contact Us',
				url: '#/contact'
			},
			{
				name: 'UI',
				url: '#/ui'
			},
			{
				name: 'Dropdown Example',
				url: '#',
				subPages: [
					{
						name: 'About',
						url: '#/about'
					},
					{},
					{
						name: 'Header',
					},
					{
						name: 'Contact',
						url: '#/contact'
					}
				]
			}
		]
	});
