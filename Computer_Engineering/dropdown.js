function gopage(){
    var e = document.getElementById("grade");
    var selectGrade=e.options[e.selectedIndex].value;

    alert(selectGrade);
    if(selectGrade=="1-1"){
        window.location.href="main_site_CE_1_1.html";
    }
    else if(selectGrade=="1-2"){
        window.location.href="main_site_CE_1_2.html";
    }
    else if(selectGrade=="2-1"){
        window.location.href="main_site_CE_2_1.html";
    }
    else if(selectGrade=="2-2"){
        window.location.href="main_site_CE_2_2.html";
    }
    else if(selectGrade=="3-1"){
        window.location.href="main_site_CE_3_1.html";
    }
    else if(selectGrade=="3-2"){
        window.location.href="main_site_CE_3_2.html";
    }
    else if(selectGrade=="4-1"){
        window.location.href="main_site_CE_4_1.html";
    }
    else if (selectGrade=="4-2"){
        window.location.href="main_site_CE_4_2.html";
    }
}