console.log("This is my index.js");
const data = [
    {
        name: "joshi",
        age: 17,
        city: "Mehsana",
        language: "C#",
        framework: ".Net",
        image: "https://randomuser.me/api/portraits/men/25.jpg",
    },
    {
        name: "zeeal",
        age: 18,
        city: "Mehsana",
        language: "Python",
        framework: "none",
        image: "https://randomuser.me/api/portraits/men/63.jpg",
    },
    {
        name: "pranav",
        age: 17,
        city: "Mehsana",
        language: "c/c++",
        framework: ".net",
        image: "https://randomuser.me/api/portraits/men/12.jpg",
    },
    {
        name: "tisha",
        age: 18,
        city: "Mehsana",
        language: "java",
        framework: null,
        image: "https://randomuser.me/api/portraits/women/69.jpg",
    },
    {
        name: "subham",
        age: 19,
        city: "ahemdabad",
        language: "Python",
        framework: "Django",
        image: "https://randomuser.me/api/portraits/men/14.jpg",
    },
];

//CV iterator
function cvIterator(profiles) {
    let nextIndex = 0;
    return {
        next: function () {
            return nextIndex < profiles.length ? { value: profiles[nextIndex++], done: false } : { done: true };
        },
    };
}

//button listener for next button
const next = document.getElementById("next");
next.addEventListener("click", nextCv);
const candidates = cvIterator(data);

nextCv();

function nextCv() {
    const currentCandidate = candidates.next().value;

    let image = document.getElementById("image");
    let profile = document.getElementById("profile");

    if (currentCandidate != undefined) {
        image.innerHTML = `<img src="${currentCandidate.image}" alt="image">`;
        profile.innerHTML = `<ul class="list-group">
        <li class="list-group-item">Name:<b>${currentCandidate.name}</b></li>
        <li class="list-group-item"> <b>${currentCandidate.age}</b> year old</li>
        <li class="list-group-item">lives in <b>${currentCandidate.city}</b></li>
        <li class="list-group-item"> Primarily works in  <b>${currentCandidate.language}</b></li>
        <li class="list-group-item">uses <b>${currentCandidate.framework}</b> framework</li>
        </ul>`;
    } else {
        alert("end of applications");
        window.location.reload();
    }
}
