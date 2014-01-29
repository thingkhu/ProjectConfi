$(document).ready(function() {

	animateSearchBox();
	activeMenu('.leftSideMenus li','activeMenu');
	activeMenu('.listMainHeader li','activeHeaderList');
	activeMenu('.listViewsHolder li','activeView');
	populateList();	
	toggleListOption('.listDetailsHolder li');
	lockScreen();
	filterList();
	windowResize();
	scrollBar();
});