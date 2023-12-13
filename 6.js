const linkedinProfile = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]\/$/;

function isValid(url) {
    return linkedinProfile.test(url);
}

let url = 'https://www.linkedin.com/in/mithun-s-83a8a3186/'

if (isValid(url)) {
    console.log(`${url}, is a valid LinkedIn profile URL.`);
} else {
    console.log(`${url}, is not a valid LinkedIn profile URL.`);
}