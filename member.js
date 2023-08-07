function skillsMember() {
    var skills = [
        { skill: "HTML", level: 9 },
        { skill: "CSS", level: 9 },
        { skill: "JavaScript", level: 8 },
        { skill: "JQuery", level: 8 },
        { skill: "Angular", level: 7 },
        { skill: "React", level: 6 },
        { skill: "Node", level: 6 },
        { skill: "MongoDB", level: 7 },
        { skill: "Mysql", level: 6 },
        { skill: "PHP", level: 7 },
        { skill: "Java", level: 5 },
        { skill: "Python", level: 5 },
        { skill: "C#", level: 5 },
        { skill: "C++", level: 4 },
        { skill: "C", level: 4 },
        { skill: "R", level: 4 },
        { skill: "Ruby", level: 3 },
        { skill: "Swift", level: 3 },
        { skill: "Perl", level: 2 },
        { skill: "Go", level: 2 },
        { skill: "Scala", level: 2 },
        { skill: "Haskell", level: 1 },
        { skill: "Rust", level: 1 }
    ];
    var skillList = "";
    for (var i = 0; i < skills.length; i++) {
        skillList += "<li>" + skills[i].skill + ": " + skills[i].level + "</li>";
    }
    document.getElementById("skillList").innerHTML = skillList;
}