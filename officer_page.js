$(document).ready(function () {
  $('.msl_organisation_list li.msl-gl-logo').each(function () {
    img = $(this).find('a').addClass('gl-logo');
    $(this).next().prepend(img);
    $(this).remove();
  });

	var elems = $('ul.msl_organisation_list li'), count = elems.length;
	container = $('ul.msl_organisation_list');

});
