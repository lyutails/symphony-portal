export function footer() {
    const footer = document.createElement('div');
    footer.classList.add('footer');    

    const footerLeft = document.createElement('div');
    footerLeft.classList.add('footer_left');
    footer.appendChild(footerLeft);

    const copyright = document.createElement('div');
    copyright.classList.add('copyright');
    footerLeft.appendChild(copyright);
    copyright.innerText = 'Copyright';

    const copyrightIcon = document.createElement('div');
    copyrightIcon.classList.add('copyright_icon');
    footerLeft.appendChild(copyrightIcon);

    const rsschoolYear = document.createElement('a');
    rsschoolYear.classList.add('rsschool_year');
    footerLeft.appendChild(rsschoolYear);
    rsschoolYear.innerText = 'RSSchool 2022';
    rsschoolYear.href = 'https://rs.school/';

    const createdBy = document.createElement('a');
    createdBy.classList.add('created_by');
    footer.appendChild(createdBy);
    createdBy.innerText = '@lyutails';
    createdBy.href = 'https://github.com/lyutails';

    return footer;
}