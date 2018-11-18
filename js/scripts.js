const Cpanel = {
    loginEmail              : document.getElementById("loginEmail"),
    loginEmailCont          : document.getElementById("loginEmailCont"),
    loginPassword           : document.getElementById("loginPassword"),
    loginPassCont           : document.getElementById("loginPassCont"),
    loginBtn                : document.getElementById("loginBtn"),
    warningInfo             : document.getElementById("warningInfo"),
    loginOutput             : document.getElementById("loginErrorOutput"),
    mainHeading             : document.getElementById("mainHeading"),
    warningBorder           : "redBorder",
    showSection             : "displayBlock",

    loginPage               : document.getElementById("loginPage"),
    teacherName             : document.getElementById("teacherName"),
    logoutBtn               : document.getElementById("logout"),

    subjectsPage            : document.getElementById("subjectsPage"),
    newSubjectBtn           : document.getElementById("newSubjectBtn"),
    newSubjectPage          : document.getElementById("newSubjectPage"),
    newSubjectCancelBtn     : document.getElementById("newSubjectCancelBtn"),
    newSubjectAddBtn        : document.getElementById("newSubjectAddBtn"),
    newSubjectInput         : document.getElementById("newSubjectInput"),
    newSubjectChar          : document.getElementById("newSubjectChar"),
    subjectBoxCont          : document.getElementById("subjectBoxCont"),
    editSubjectPage         : document.getElementById("editSubjectPage"),
    editSubjectPageInput    : document.getElementById("editSubjectPageInput"),
    deleteSubjectPage       : document.getElementById("deleteSubjectPage"),
    deleteSubjectName       : document.getElementById("deleteSubjectName"),
    agreeDeleteSubject      : document.getElementById("agreeDeleteSubject"),
    agreeDeleteSubjectLabel : document.getElementById("agreeDeleteSubjectLabel"),
    editStudentPage         : document.getElementById("editStudentPage"),
    hideEditStudentPageBtn  : document.getElementById("hideEditStudentPageBtn"),
    saveEditedStudentBtn    : document.getElementById("saveEditedStudentBtn"),
    editFirstnameInput      : document.getElementById("editFirstnameInput"),
    editLastnameInput       : document.getElementById("editLastnameInput"),
    editPersonalNInput      : document.getElementById("editPersonalNInput"),
    editBirthdateInput      : document.getElementById("editBirthdateInput"),
    editEmailInput          : document.getElementById("editEmailInput"),
    editPhoneInput          : document.getElementById("editPhoneInput"),
    editAddressInput        : document.getElementById("editAddressInput"),
    editMale                : document.getElementById("editMale"),
    editFemale              : document.getElementById("editFemale"),
    editStudentPopupBox     : document.getElementById("editStudentPopupBox"),

    deleteStudentPage       : document.getElementById("deleteStudentPage"),
    deleteStudentFullName   : document.getElementById("deleteStudentFullName"),
    agreeDeleteStudent      : document.getElementById("agreeDeleteStudent"),
    hideDelStudentPageBtn   : document.getElementById("hideDelStudentPageBtn"),
    deleteStudentBtn        : document.getElementById("deleteStudentBtn"),
    studentDelLabel         : document.getElementById("studentDelLabel"),

    studentsPage            : document.getElementById("studentsPage"),
    newStudentBtn           : document.getElementById("newStudentBtn"),
    newStudentPage          : document.getElementById("newStudentPage"),
    hideNewStudentPageBtn   : document.getElementById("hideNewStudentPageBtn"),
    addNewStudentBtn        : document.getElementById("addNewStudentBtn"),
    newStudentPopupBox      : document.getElementById("newStudentPopupBox"),
    subjectNameHeading      : document.getElementById("subjectNameHeading"),
    editScoreInput          : document.getElementById("editScoreInput"),
    closeEditScoreBtn       : document.getElementById("closeEditScoreBtn"),
    saveChangedScoreBtn     : document.getElementById("saveChangedScoreBtn"),
    editStudentScoreSect    : document.getElementById("editStudentScoreSect"),
    middleTableTbodyScores  : document.getElementById("middleTableTbodyScores"),

    newStudentFirstname     : document.getElementById("newStudentFirstname"),
    newStudentLastname      : document.getElementById("newStudentLastname"),
    newStudentPersonalN     : document.getElementById("newStudentPersonalN"),
    newStudentEmail         : document.getElementById("newStudentEmail"),
    newStudentBirthdate     : document.getElementById("newStudentBirthdate"),
    newStudentPhone         : document.getElementById("newStudentPhone"),
    newStudentAddress       : document.getElementById("newStudentAddress"),
    scoreHeading            : document.getElementById("scoreHeading"),

    topMenu                 : document.getElementById("topMenu"),
    fullScreenMenuPage      : document.getElementById("fullScreenMenuPage"),
    openSubjectPageItem     : document.getElementById("openSubjectPageItem"),

    fullscreenMenuList      : document.getElementById("fullscreenMenuList"),
    settingsBtn             : document.getElementById("settingsBtn"),
    settingsPage            : document.getElementById("settingsPage"),
    currentEmailInput       : document.getElementById("currentEmailInput"),
    newEmailInput           : document.getElementById("newEmailInput"),
    confirmEmailInput       : document.getElementById("confirmEmailInput"),
    changeEmailBtn          : document.getElementById("changeEmailBtn"),
    currentPasswordInput    : document.getElementById("currentPasswordInput"),
    newPasswordInput        : document.getElementById("newPasswordInput"),
    confirmNewPassInput     : document.getElementById("confirmNewPassInput"),
    passwordStrengthViewer  : document.getElementById("passwordStrengthViewer"),
    passwordStrengthTxt     : document.getElementById("passwordStrengthTxt"),
    changePasswordBtn       : document.getElementById("changePasswordBtn"),
    closeSettingsPageBtn    : document.getElementById("closeSettingsPageBtn"),

    statisticPage           : document.getElementById("statisticPage"),
    statisticBtn            : document.getElementById("statisticBtn"),
    totalStudent            : document.getElementById("totalStudent"),
    averageAge              : document.getElementById("averageAge"),
    averageScore            : document.getElementById("averageScore"),
    totalMale               : document.getElementById("totalMale"),
    totalFemale             : document.getElementById("totalFemale"),
    missedLessons           : document.getElementById("missedLessons"),

    databaseName    : "cpanelBase",
    database        : [[],[]],
    Teacher: function (id, firstname, lastname, personaN, age, gender, phone, address, email, password, subject) {
        this.id = id;
        this.firstName = firstname;
        this.lastName = lastname;
        this.personaN = personaN;
        this.age = age;
        this.gender = gender;
        this.phone = phone;
        this.address = address;
        this.email = email;
        this.password = password;
        this.subject = subject;
    },
    Subject: function (id, name, creator) {
        this.id = id;
        this.name = name;
        this.teacher = creator;
        this.students = [];
        this.startDate = "Apr/30/2018";
        this.endDate = Cpanel.changeDateFormat(new Date());
    },
    Student: function (id,firstname,lastname,personaN,birthdate,gender,email,phone,address,scores) {
        this.id = id;
        this.firstName = firstname;
        this.lastName = lastname;
        this.personaN = personaN;
        this.birthDate = birthdate;
        this.gender = gender;
        this.email = email;
        this.phone = phone;
        this.address = address;
        this.scores = scores;
    },
    Score: function(score,x,y) {
        this.score = score;
        this.x = x;
        this.y = y;
    },
    serialize: function (obj) {
        return JSON.stringify(obj);
    },
    deserialize: function (obj) {
        return JSON.parse(obj);
    },
    emailValidator: function(email) {
        var result = false;
        if(email.trim() !== "") {
            if((email.indexOf("@") > -1) && (email.indexOf(".") > -1)) {
                let splitEmail = email.split("@");
                if(splitEmail.length === 2) {
                    if(splitEmail[0].length > 0 && splitEmail[1].length > 0) {
                        if((splitEmail[1].split(".")[0].trim() !== "") && (splitEmail[1].split(".")[1].trim() !== "") && splitEmail[1].split(".")[1].length > 1) {
                            result = true;
                        }
                    }                 
                }
            }
        }
        return result;
    },
    login: function() {
        if(sessionStorage.getItem("loginInfo")) {
            Cpanel.loginPage.style.display = "none";

            Cpanel.subjectNameHeading.style.display = "none";
            Cpanel.studentsPage.style.display = "none";  

            let loggedTeacher1 = Cpanel.deserialize(sessionStorage.getItem("loginInfo"));
            Cpanel.teacherName.innerHTML = loggedTeacher1.firstName +" "+ loggedTeacher1.lastName;            
        }

        Cpanel.loginBtn.addEventListener("click",function(){ 
            let totalTeacher = Cpanel.deserialize(localStorage.getItem(Cpanel.databaseName))[0];
            
            Cpanel.removeVirtualElements();           
            if(Cpanel.emailValidator(Cpanel.loginEmail.value)) {
                Cpanel.loginEmailCont.classList.remove(Cpanel.warningBorder);
                var wrongLoginInfo = 0;
                for(let i = 0; i < totalTeacher.length; i++) {                    
                    if((Cpanel.loginEmail.value === totalTeacher[i].email) && (Cpanel.loginPassword.value === totalTeacher[i].password)) {
                        Cpanel.teacherName.innerHTML = totalTeacher[i].firstName +" "+ totalTeacher[i].lastName;
                        Cpanel.loginPage.style.display = "none";

                        Cpanel.subjectNameHeading.style.display = "none";
                        Cpanel.studentsPage.style.display = "none"; 
                        Cpanel.loginEmail.value = "";
                        Cpanel.loginPassword.value = "";                        
                        login = true;                        
                        Cpanel.serialize(sessionStorage.setItem("loginInfo",Cpanel.serialize({firstName: totalTeacher[i].firstName, lastName: totalTeacher[i].lastName, email: totalTeacher[i].email, id: totalTeacher[i].id})));
                    }else {
                        wrongLoginInfo++;
                    }
                }                             
            }else {
                Cpanel.loginEmailCont.classList.add(Cpanel.warningBorder);
            } 
            if(Cpanel.loginPassword.value.trim() === "") {
                Cpanel.loginPassCont.classList.add(Cpanel.warningBorder);                
            }else {
                Cpanel.loginPassCont.classList.remove(Cpanel.warningBorder);
                if(wrongLoginInfo == totalTeacher.length) {
                    Cpanel.warningInfo.innerHTML = "Email or password is wrong!";
                    Cpanel.loginOutput.style.opacity = "1";
                    setTimeout(function(){
                        Cpanel.loginOutput.style.opacity = "0"; 
                    },3000);
                } 
            } 
            Cpanel.loadSubject();
            Cpanel.editSubject();
            Cpanel.deleteSubject();
            Cpanel.loadStudents();
        });
    },
    logout: function() {
        Cpanel.logoutBtn.addEventListener("click",function(){
            sessionStorage.removeItem("loginInfo");
            Cpanel.loginPage.style.display = "block";
            Cpanel.loginEmailCont.classList.remove(Cpanel.warningBorder);
            Cpanel.loginPassCont.classList.remove(Cpanel.warningBorder);
        });
    },
    createDatabase: function() {
        if(localStorage.getItem(Cpanel.databaseName) === null) {
            let Giorgi = new Cpanel.Teacher(1,"Giorgi","Parunov","01234567899",23,"Male","599-99-99-99","Chavchavadze Ave.","giorgi.parunov@gmail.com","giorgi123","Angular");
            let Jano   = new Cpanel.Teacher(2,"Jano","Bokuchava","01234567898",23,"Male","599-99-99-98","Rustaveli Ave.","jano.bokuchava@gmail.com","jano123","React");
            let Irakli   = new Cpanel.Teacher(3,"Irakli","Iakobishvili","01234567897",25,"Male","599-99-99-97","Tsereteli Ave.","irakli.iakobishvili@gmail.com","irakli123","JS");
            let Teachers = [Giorgi,Jano,Irakli];
            for(let i = 0; i < Teachers.length; i++) {
                Cpanel.database[0].push(Teachers[i]);
            }
            localStorage.setItem(Cpanel.databaseName,Cpanel.serialize(Cpanel.database));
        }
    },
    virtualSubject: function(subjectName,id) {
        let contDiv     = document.createElement("div");
        let editBtn     = document.createElement("button");
        let delBtn      = document.createElement("button");
        let editIcon    = document.createElement("i");
        let delIcon     = document.createElement("i");
        let nameBgDiv   = document.createElement("div");
        let folderICont = document.createElement("div");
        let folderIcon  = document.createElement("i"); 
        let folderIconO = document.createElement("i");
        let subjName    = document.createElement("span");

        subjName.innerText = subjectName;

        contDiv.classList.add("mainContent__subjects__box");                
        editBtn.classList.add("mainContent__subjects__box__editBtn");
        delBtn.classList.add("mainContent__subjects__box__removeBtn");
        editIcon.classList.add("fa");
        editIcon.classList.add("fa-pencil");
        delIcon.classList.add("fa");
        delIcon.classList.add("fa-times-circle");
        nameBgDiv.classList.add("mainContent__subjects__box__subjectName");
        folderICont.classList.add("folderIconsCont");
        
        folderIcon.classList.add("fa");
        folderIcon.classList.add("fa-folder");
        folderIconO.classList.add("fa");
        folderIconO.classList.add("fa-folder-open");

        editIcon.setAttribute("aria-hidden",true);
        delIcon.setAttribute("aria-hidden",true); 

        folderIcon.setAttribute("aria-hidden",true);
        folderIconO.setAttribute("aria-hidden",true);

        editBtn.appendChild(editIcon);
        delBtn.appendChild(delIcon);

        folderICont.appendChild(folderIcon);
        folderICont.appendChild(folderIconO);
        nameBgDiv.appendChild(folderICont);
        nameBgDiv.appendChild(subjName);

        contDiv.appendChild(editBtn);
        contDiv.appendChild(delBtn);
        contDiv.appendChild(nameBgDiv);
        contDiv.setAttribute("data-id",id);

        Cpanel.subjectBoxCont.insertBefore(contDiv,Cpanel.subjectBoxCont.childNodes[0]);
    },
    newSubject: function() {
        Cpanel.newSubjectBtn.addEventListener("click",function(){
            Cpanel.newSubjectPage.style.display = "block";
        });
        Cpanel.newSubjectCancelBtn.addEventListener("click",function(){
            Cpanel.newSubjectPage.style.display = "none";
            Cpanel.newSubjectInput.value = "";
        });
        Cpanel.newSubjectInput.addEventListener("keyup",Cpanel.inputCharLeftCounter);
        Cpanel.newSubjectAddBtn.addEventListener("click",function(){
            if(Cpanel.newSubjectInput.value.trim() !== ""){
                let subjectName = Cpanel.newSubjectInput.value;     
                let newSubjectId;

                let oldBase = Cpanel.deserialize(localStorage.getItem(Cpanel.databaseName));
                let totalSubjects = oldBase[1];
                if(totalSubjects.length === 0) {
                    newSubjectId = 1;
                }else {
                    let lastObject = totalSubjects[totalSubjects.length-1];
                    newSubjectId = lastObject.id+1;
                }

                let loggedTeacher = Cpanel.deserialize(sessionStorage.getItem("loginInfo"));
                subjectName = new Cpanel.Subject(newSubjectId,Cpanel.newSubjectInput.value,loggedTeacher.email);              
                totalSubjects.push(subjectName); 
                localStorage.setItem(Cpanel.databaseName,Cpanel.serialize(oldBase));
                
                Cpanel.newSubjectChar.innerText = Cpanel.newSubjectInput.getAttribute("data-maxChar");
                Cpanel.newSubjectPage.style.display = "none";

                Cpanel.virtualSubject(Cpanel.newSubjectInput.value,newSubjectId);
                Cpanel.newSubjectInput.value = "";
            }
            Cpanel.editSubject();
            Cpanel.deleteSubject();
            Cpanel.loadStudents();
        });
    },
    loadSubject: function() {
        if(sessionStorage.getItem("loginInfo")) {
            let loggedTeacher = Cpanel.deserialize(sessionStorage.getItem("loginInfo"));
            let database = Cpanel.deserialize(localStorage.getItem(Cpanel.databaseName));
            let subjectsBase = database[1];

            /*----------------- Remove All Subjects From Dom and Load From Localstorage on Every Login! ------------------*/
            let subjectBoxLength = Cpanel.subjectBoxCont.children.length - 1;
            for(let i = 0; i < subjectBoxLength; i++) {
                Cpanel.subjectBoxCont.firstElementChild.parentNode.removeChild(Cpanel.subjectBoxCont.firstElementChild);
            }

            for(let i = 0; i < subjectsBase.length; i++) {
                (loggedTeacher.email === subjectsBase[i].teacher) ? Cpanel.virtualSubject(subjectsBase[i].name,subjectsBase[i].id) : true;
            }
            Cpanel.deleteSubject();         
        }
    },
    editSubject: function() {
        Cpanel.editSubjectPageInput.addEventListener("keyup",function(){
            let maxChar = Number(Cpanel.newSubjectInput.getAttribute("data-maxChar"));
            if(this.value.length > maxChar) {
                this.value = this.value.substring(0,maxChar);
            }
        });
        /*----------------------------------------------------------------------------------*/
        function editSubjectInfo() {
            let totalSubjects = Cpanel.deserialize(localStorage.getItem(Cpanel.databaseName))[1];
            for(let i = 0; i < totalSubjects.length; i++) {
                if(Number(this.parentNode.getAttribute("data-id")) === totalSubjects[i].id) {
                    Cpanel.editSubjectPageInput.value = totalSubjects[i].name;
                    Cpanel.editSubjectPageInput.setAttribute("data-id",totalSubjects[i].id);
                }
            }
            Cpanel.editSubjectPage.style.display = "block";
        }//editSubjectInfo
        let editBtns = document.getElementsByClassName("mainContent__subjects__box__editBtn");
        for(let i = 0; i < editBtns.length; i++) {
            editBtns[i].addEventListener("click",editSubjectInfo);
        }
        /*----------------------------------------------------------------------------------*/
        function closeSubjectPage() {
            Cpanel.editSubjectPageInput.value = "";
            Cpanel.editSubjectPage.style.display = "none";
        }//closeSubjectPage
        let cancelBtns = Cpanel.editSubjectPage.getElementsByClassName("cancelBtn");
        for(let i = 0; i < cancelBtns.length; i++) {
            cancelBtns[i].addEventListener("click",closeSubjectPage);
        }
        /*----------------------------------------------------------------------------------*/
        function saveSubjectName() {
            let oldBase = Cpanel.deserialize(localStorage.getItem(Cpanel.databaseName));
            let totalSubjects = oldBase[1];
            let currentSubjectId = Number(Cpanel.editSubjectPageInput.getAttribute("data-id"));
            for(let i = 0; i < totalSubjects.length; i++) {
                if(currentSubjectId === totalSubjects[i].id) {
                    totalSubjects[i].name = Cpanel.editSubjectPageInput.value;
                    localStorage.setItem(Cpanel.databaseName,Cpanel.serialize(oldBase));
                    Cpanel.loadSubject();
                    Cpanel.deleteSubject();
                    Cpanel.loadStudents();
                    /*------------- Subject Boxes need Eventlistener on every login!----------------*/
                    for(let i = 0; i < editBtns.length; i++) {
                        editBtns[i].addEventListener("click",editSubjectInfo);
                    }
                    /*----------- End Subject Boxes need Eventlistener on every login!--------------*/
                    Cpanel.editSubjectPage.style.display = "none";
                }
            }                    
        }//saveSubjectName
        let savelBtns = Cpanel.editSubjectPage.getElementsByClassName("actionBtn");
        for(let i = 0; i < savelBtns.length; i++) {
            savelBtns[i].addEventListener("click",saveSubjectName);
        }
    },
    deleteSubject: function() {
        function openDeleteSubjectPage() {
            Cpanel.agreeDeleteSubjectLabel.classList.remove("redBorder"); /////////////
            let totalSubjects = Cpanel.deserialize(localStorage.getItem(Cpanel.databaseName))[1];
            for(let i = 0; i < totalSubjects.length; i++) {
                if(Number(this.parentNode.getAttribute("data-id")) === totalSubjects[i].id) {
                    Cpanel.deleteSubjectName.innerHTML = totalSubjects[i].name;
                    Cpanel.deleteSubjectPage.setAttribute("data-id",totalSubjects[i].id);
                }
            }
            Cpanel.deleteSubjectPage.style.display = "block";
        }//openDeleteSubjectPage
        let removeBtns = document.getElementsByClassName("mainContent__subjects__box__removeBtn");
        for(let i = 0; i < removeBtns.length; i++) {
            removeBtns[i].addEventListener("click",openDeleteSubjectPage);
        }
        /*--------------------------------------------------------------------------------------*/
        function closeDeleteSubjectPage() {
            Cpanel.deleteSubjectPage.style.display = "none";
            Cpanel.agreeDeleteSubjectLabel.classList.remove("redBorder");
            Cpanel.agreeDeleteSubject.checked = false;
        }//closeDeleteSubjectPage
        let cancelBtns = Cpanel.deleteSubjectPage.getElementsByClassName("cancelBtn");
        for(let i = 0; i < cancelBtns.length; i++) {
            cancelBtns[i].addEventListener("click",closeDeleteSubjectPage);
        }
        /*--------------------------------------------------------------------------------------*/
        function deleteSubjectBox() {
            if(Cpanel.agreeDeleteSubject.checked) {
                let oldBase = Cpanel.deserialize(localStorage.getItem(Cpanel.databaseName));
                let totalSubjects = oldBase[1];

                for(let i = 0; i < totalSubjects.length; i++) {
                    if(Number(Cpanel.deleteSubjectPage.getAttribute("data-id")) === totalSubjects[i].id) {
                        let targetElIndex = totalSubjects.indexOf(totalSubjects[i]);
                        totalSubjects.splice(targetElIndex, 1); 
                        localStorage.setItem(Cpanel.databaseName,Cpanel.serialize(oldBase));
                        Cpanel.loadSubject();
                        Cpanel.editSubject();
                        Cpanel.deleteSubject(); 
                        Cpanel.loadStudents();    
                    }
                }

                Cpanel.deleteSubjectPage.style.display = "none";
                Cpanel.agreeDeleteSubjectLabel.classList.remove("redBorder");
                Cpanel.agreeDeleteSubject.checked = false;
            }else {
                Cpanel.agreeDeleteSubjectLabel.classList.add("redBorder");
            }
        }//deleteSubjectBox
        let deleteBtns = Cpanel.deleteSubjectPage.getElementsByClassName("actionBtn");
        for(let i = 0; i < deleteBtns.length; i++) {
            deleteBtns[i].addEventListener("click",deleteSubjectBox);
        }
        /*--------------------------------------------------------------------------------------*/
        Cpanel.agreeDeleteSubject.addEventListener("change",function(){
            if(Cpanel.agreeDeleteSubject.checked) {
                Cpanel.agreeDeleteSubjectLabel.classList.remove("redBorder");
            }else {
                Cpanel.agreeDeleteSubjectLabel.classList.add("redBorder");
            }
        });
    },
    loadStudents: function() {
        function openStudentsPage() {
            Cpanel.mainHeading.innerHTML = "Students";
            Cpanel.studentsPage.style.display = "block";
            let clickedSubjectID = this.parentNode.getAttribute("data-id");
            Cpanel.studentsPage.setAttribute("data-id",clickedSubjectID);

            let jsGeneratedtrs = document.getElementsByClassName("jsGenerated");
            if(jsGeneratedtrs.length) {
                for(let i = 0; i < jsGeneratedtrs.length; i++) {
                    jsGeneratedtrs[i].parentNode.removeChild(jsGeneratedtrs[i]);
                }
            }

            let editRemoveTrs = document.getElementsByClassName("editRemoveTr");
            if(editRemoveTrs.length) {
                for(let i = 0; i < editRemoveTrs.length; i++) {
                    editRemoveTrs[i].parentNode.removeChild(editRemoveTrs[i]);
                }
            }


            Cpanel.loadStudentsList(clickedSubjectID); 
            Cpanel.loadEditRemoveList(clickedSubjectID);
            Cpanel.loadStudentsScores(clickedSubjectID);
            Cpanel.generateTrs(clickedSubjectID);

            let totalSubjects = Cpanel.deserialize(localStorage.getItem(Cpanel.databaseName))[1];
            for(let i = 0; i < totalSubjects.length; i++) {
                if(totalSubjects[i].id === Number(clickedSubjectID)) {
                    Cpanel.subjectNameHeading.innerHTML = totalSubjects[i].name;
                    Cpanel.subjectNameHeading.setAttribute("data-subject-id",totalSubjects[i].id)
                }
            }
            Cpanel.subjectNameHeading.style.display = "block";
        }//openStudentsPage
        let openStudentsPageBtns = document.getElementsByClassName("mainContent__subjects__box__subjectName");
        for(let i = 0; i < openStudentsPageBtns.length - 1; i++) { // - 1 excludes "New Subject" Btn and only Subject names targets!
            openStudentsPageBtns[i].addEventListener("click",openStudentsPage);
        }
    },
    newStudent: function() {
        function showNewStudentPage() {
            Cpanel.newStudentPage.style.display = "block";
        }//showNewStudentPage
        Cpanel.newStudentBtn.addEventListener("click",showNewStudentPage);
        /*--------------------------------------------------------------------------*/  
        function hideNewStudentPage(){
            Cpanel.newStudentPage.style.display = "none";
            let inputs = Cpanel.newStudentPopupBox.getElementsByTagName("input");
            for(let i = 0; i < inputs.length; i++) {
                if(inputs[i].getAttribute("type") === 'radio') {
                    inputs[i].checked = false; 
                }else {
                    inputs[i].value = "";
                }
            }
        }//hideNewStudentPage
        Cpanel.hideNewStudentPageBtn.addEventListener("click",hideNewStudentPage);
        /*--------------------------------------------------------------------------*/
      
        /*--------------------------------------------------------------------------*/
        function insertIntoDatabaseNewStudent() { 
            let inputs = [Cpanel.newStudentFirstname,Cpanel.newStudentLastname,Cpanel.newStudentPersonalN,Cpanel.newStudentPhone,Cpanel.newStudentAddress];
            let radios = Cpanel.newStudentPopupBox.querySelectorAll('input[name=gender]');
            let redBorders = 0;

            Cpanel.validateRadios(radios);

            if(Cpanel.emailValidator(Cpanel.newStudentEmail.value)){
                Cpanel.newStudentEmail.classList.remove(Cpanel.warningBorder);
            }else {
                Cpanel.newStudentEmail.classList.add(Cpanel.warningBorder);
            }

            (function() {
                let pattern = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i;
                if(pattern.test(Cpanel.newStudentBirthdate.value)) {
                    Cpanel.newStudentBirthdate.classList.remove(Cpanel.warningBorder);
                }else {
                    Cpanel.newStudentBirthdate.classList.add(Cpanel.warningBorder);
                }
            }());
            
            for(let i = 0; i < inputs.length; i++) {
                if(inputs[i].value.trim() === "") {
                    inputs[i].classList.add(Cpanel.warningBorder);
                }else {
                    inputs[i].classList.remove(Cpanel.warningBorder);                    
                }              
            }

            for(let i = 0; i < inputs.length; i++) {
                if(inputs[i].classList.contains(Cpanel.warningBorder))
                redBorders++;
            }
            if(radios[0].parentNode.classList.contains(Cpanel.warningBorder)) {
                redBorders++;
            }
            if(Cpanel.newStudentEmail.classList.contains(Cpanel.warningBorder)) {
                redBorders++;
            }
            if(Cpanel.newStudentBirthdate.classList.contains(Cpanel.warningBorder)) {
                redBorders++;
            }

            if(redBorders === 0) {
                let oldBase = Cpanel.deserialize(localStorage.getItem(Cpanel.databaseName));
                let totalSubjects = oldBase[1];
                
                
                
                let id;
                let firstname   = Cpanel.newStudentFirstname.value;
                let lastname    = Cpanel.newStudentLastname.value;
                let personaN    = Cpanel.newStudentPersonalN.value;
                let birthdate   = Cpanel.newStudentBirthdate.value;
                let gender;
                let email       = Cpanel.newStudentEmail.value;
                let phone       = Cpanel.newStudentPhone.value;
                let address     = Cpanel.newStudentAddress.value;
                let scores      = [];

                for(let i = 0; i < radios.length; i++) {
                    if(radios[i].checked === true) {
                        gender = radios[i].value;
                    }
                }

                for(let i = 0; i < totalSubjects.length; i++) {
                    if(totalSubjects[i].id === Number(Cpanel.studentsPage.getAttribute("data-id"))) {
                        if(totalSubjects[i].students.length === 0) {
                            id = 1;
                        }else {
                            let lastStudentId = totalSubjects[i].students[totalSubjects[i].students.length-1].id
                            newStudentId = lastStudentId+1;
                            id = newStudentId;      
                        }
                        let newStudent = new Cpanel.Student(id,firstname,lastname,personaN,birthdate,gender,email,phone,address,scores);
                        totalSubjects[i].students.push(newStudent);
                        localStorage.setItem(Cpanel.databaseName,Cpanel.serialize(oldBase));
                        hideNewStudentPage();
                    }
                }

                /*---------------------------------------------------------------------*/
                let jsGeneratedtrs = document.getElementsByClassName("jsGenerated");
                if(jsGeneratedtrs.length) {
                    for(let i = 0; i < jsGeneratedtrs.length; i++) {
                        jsGeneratedtrs[i].parentNode.removeChild(jsGeneratedtrs[i]);
                    }
                }

                let editRemoveTrs = document.getElementsByClassName("editRemoveTr");
                var i = editRemoveTrs.length;
                while (i--) {
                    editRemoveTrs[i].parentNode.removeChild(editRemoveTrs[i]);
                }

                /*---------------------------------------------------------------------*/
                Cpanel.loadStudentsList(Cpanel.studentsPage.getAttribute("data-id"));
                Cpanel.loadEditRemoveList(Cpanel.studentsPage.getAttribute("data-id"));
                Cpanel.generateTrs(Cpanel.studentsPage.getAttribute("data-id"));
            }
        }//insertIntoDatabaseNewStudent
        Cpanel.addNewStudentBtn.addEventListener("click",insertIntoDatabaseNewStudent);
    },
    editStudent: function() {
        let database = Cpanel.deserialize(localStorage.getItem(Cpanel.databaseName));
        let subjectsBase = database[1];
        let editStudentBtns = document.getElementById("editRemoveTableTbody").getElementsByClassName("editBtn");
        function editStudentInfo() {
            Cpanel.editStudentPage.style.display = "block";
            let subjectId = Number(this.getAttribute("data-subject-id"));
            let studentId = Number(this.getAttribute("data-student-id"));

            for(let i = 0; i < subjectsBase.length; i++) {
                let currentSubject = subjectsBase[i];
                if(currentSubject.id === subjectId) {
                    for(let ii = 0; ii < currentSubject.students.length; ii++) {
                        let currentStudent = currentSubject.students[ii];
                        if(currentStudent.id === studentId) {
                            Cpanel.editFirstnameInput.value = currentStudent.firstName;
                            Cpanel.editLastnameInput.value  = currentStudent.lastName;
                            Cpanel.editPersonalNInput.value = currentStudent.personaN;
                            Cpanel.editBirthdateInput.value = currentStudent.birthDate;
                            Cpanel.editEmailInput.value     = currentStudent.email;
                            Cpanel.editPhoneInput.value     = currentStudent.phone;
                            Cpanel.editAddressInput.value   = currentStudent.address;

                            Cpanel.editStudentPage.setAttribute("data-subject-id",currentSubject.id);
                            Cpanel.editStudentPage.setAttribute("data-student-id",currentStudent.id);
                            switch(currentStudent.gender) {
                                case "female":
                                    Cpanel.editFemale.checked = true;
                                break;
                                case "male":
                                    Cpanel.editMale.checked = true;
                                break;
                            }//switch                            
                        }//currentStudent.id === studentId
                    }
                }
            }
        }//editStudentInfo

        function insertIntoDatabaseEditedStudent() {
            let subjectId = Number(Cpanel.editStudentPage.getAttribute("data-subject-id"));
            let studentId = Number(Cpanel.editStudentPage.getAttribute("data-student-id"));
            
            let inputs = [Cpanel.editFirstnameInput,Cpanel.editLastnameInput,Cpanel.editPersonalNInput,Cpanel.editPhoneInput,Cpanel.editAddressInput];
            let radios = Cpanel.editStudentPopupBox.querySelectorAll('input[name=gender]');
            let redBorders = 0;

            Cpanel.validateRadios(radios);

            if(Cpanel.emailValidator(Cpanel.editEmailInput.value)){
                Cpanel.editEmailInput.classList.remove(Cpanel.warningBorder);
            }else {
                Cpanel.editEmailInput.classList.add(Cpanel.warningBorder);
            }

            (function() {
                let pattern = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i;
                if(pattern.test(Cpanel.editBirthdateInput.value)) {
                    Cpanel.editBirthdateInput.classList.remove(Cpanel.warningBorder);
                }else {
                    Cpanel.editBirthdateInput.classList.add(Cpanel.warningBorder);
                }
            }());
            
            for(let i = 0; i < inputs.length; i++) {
                if(inputs[i].value.trim() === "") {
                    inputs[i].classList.add(Cpanel.warningBorder);
                }else {
                    inputs[i].classList.remove(Cpanel.warningBorder);                    
                }              
            }

            for(let i = 0; i < inputs.length; i++) {
                if(inputs[i].classList.contains(Cpanel.warningBorder))
                redBorders++;
            }
            if(radios[0].parentNode.classList.contains(Cpanel.warningBorder)) {
                redBorders++;
            }
            if(Cpanel.editEmailInput.classList.contains(Cpanel.warningBorder)) {
                redBorders++;
            }
            if(Cpanel.editBirthdateInput.classList.contains(Cpanel.warningBorder)) {
                redBorders++;
            }

            if(redBorders === 0) {
                let gender;
                for(let i = 0; i < radios.length; i++) {
                    if(radios[i].checked === true) {
                        gender = radios[i].value;
                    }
                }
                for(let i = 0; i < subjectsBase.length; i++) {
                    let currentSubject = subjectsBase[i];
                    if(currentSubject.id === subjectId) {
                        for (let ii = 0; ii < currentSubject.students.length; ii++) {
                            let currentStudent = currentSubject.students[ii];
                            if(currentStudent.id === studentId) {
                                currentStudent.firstName = Cpanel.editFirstnameInput.value;
                                currentStudent.lastName  = Cpanel.editLastnameInput.value;
                                currentStudent.personaN  = Cpanel.editPersonalNInput.value;
                                currentStudent.birthDate = Cpanel.editBirthdateInput.value;
                                currentStudent.email     = Cpanel.editEmailInput.value;
                                currentStudent.phone     = Cpanel.editPhoneInput.value;
                                currentStudent.address   = Cpanel.editAddressInput.value;
                                currentStudent.gender    = gender;
                                localStorage.setItem(Cpanel.databaseName,Cpanel.serialize(database));
                                Cpanel.editStudentPage.style.display = "none";
                                Cpanel.loadStudentsList(subjectId);
                            }
                        }                        
                    }
                }
            }
        }//insertIntoDatabaseEditedStudent

        for(let i = 0; i < editStudentBtns.length; i++) {
            editStudentBtns[i].addEventListener("click",editStudentInfo);
        }

        Cpanel.hideEditStudentPageBtn.addEventListener("click",function(){
            Cpanel.editStudentPage.style.display = "none";
        });

        Cpanel.saveEditedStudentBtn.addEventListener("click",insertIntoDatabaseEditedStudent);
    },
    removeStudent: function() {
        let removeBtns = document.getElementById("editRemoveTableTbody").getElementsByClassName("deleteBtn");
        function removeSingleStudent($this) {
            let database = Cpanel.deserialize(localStorage.getItem(Cpanel.databaseName));
            let subjectsBase = database[1];

            let subjectId = Number($this.getAttribute("data-subject-id"));
            let studentId = Number($this.getAttribute("data-student-id"));

            for(let i = 0; i < subjectsBase.length; i++) {
                let currentSubject = subjectsBase[i];
                if(currentSubject.id === subjectId) {
                    for(let ii = 0; ii < currentSubject.students.length; ii++) {
                        let currentStudent = currentSubject.students[ii];
                        if(currentStudent.id === studentId) {
                            let indexOfStudentWeRemove = currentSubject.students.indexOf(currentStudent);
                            currentSubject.students.splice(indexOfStudentWeRemove,1);
                            localStorage.setItem(Cpanel.databaseName,Cpanel.serialize(database));
                            Cpanel.loadEditRemoveList(subjectId);
                            Cpanel.loadStudentsList(subjectId);
                            Cpanel.generateTrs(subjectId);
                            Cpanel.deleteStudentPage.style.display = "none";
                        }
                    }
                }
            }
        }//removeSingleStudent

        function showDeleteStuedntBox() {
            let studenListInLeftTable = document.getElementById("studentsListTbody").getElementsByClassName("jsGenerated");
            let targetStudentId = this.getAttribute("data-student-id");
            for(let i = 0; i < studenListInLeftTable.length; i++) {
                if(studenListInLeftTable[i].getAttribute("data-student-id") == targetStudentId) {
                    Cpanel.deleteStudentFullName.innerHTML = studenListInLeftTable[i].getElementsByTagName("td")[1].getElementsByTagName("span")[0].innerHTML;
                    Cpanel.deleteStudentPage.style.display = "block";

                    let subjectId = Number(this.getAttribute("data-subject-id"));
                    let studentId = Number(this.getAttribute("data-student-id"));
                    
                    Cpanel.deleteStudentBtn.setAttribute("data-subject-id",subjectId);
                    Cpanel.deleteStudentBtn.setAttribute("data-student-id",studentId);
                }
            }
        }//showDeleteStuedntBox

        for(let i = 0; i < removeBtns.length; i++) {
            removeBtns[i].addEventListener("click",showDeleteStuedntBox);
        }

        Cpanel.hideDelStudentPageBtn.addEventListener("click",function(){
            Cpanel.deleteStudentPage.style.display = "none";
            Cpanel.studentDelLabel.classList.remove(Cpanel.warningBorder);
            Cpanel.agreeDeleteStudent.checked = false;
        });

        Cpanel.deleteStudentBtn.addEventListener("click",function(e){
            if(Cpanel.agreeDeleteStudent.checked) {
                removeSingleStudent(e.target);
                Cpanel.studentDelLabel.classList.remove(Cpanel.warningBorder);
                Cpanel.agreeDeleteStudent.checked = false;
            }else {
                Cpanel.studentDelLabel.classList.add(Cpanel.warningBorder);
            }
        });   
    },
    fullScreenMenu: function() {
        function showFullScreenMenuPage() {
            Cpanel.fullScreenMenuPage.classList.toggle(Cpanel.showSection);
            Cpanel.topMenu.firstElementChild.classList.toggle("fa-bars");
            Cpanel.topMenu.firstElementChild.classList.toggle("fa-times");
            Cpanel.statisticPage.style.display = "none";
        }//showFullScreenMenuPage
        Cpanel.topMenu.addEventListener("click",showFullScreenMenuPage);

        /*------------------------------------------------------------------------*/
        function openSubjectsPage() {         
            let jsGeneratedtrs = document.getElementsByClassName("jsGenerated");
            if(jsGeneratedtrs.length) {
                for(let i = 0; i < jsGeneratedtrs.length; i++) {
                    jsGeneratedtrs[i].parentNode.removeChild(jsGeneratedtrs[i]);
                }
            }

            let editRemoveTrs = document.getElementsByClassName("editRemoveTr");
            if(editRemoveTrs.length) {
                for(let i = 0; i < editRemoveTrs.length; i++) {
                    editRemoveTrs[i].parentNode.removeChild(editRemoveTrs[i]);
                }
            }            
            /*---------------------------------------------------------------------*/
            Cpanel.mainHeading.innerHTML = "Subjects";
            Cpanel.fullScreenMenuPage.classList.toggle(Cpanel.showSection);
            Cpanel.topMenu.firstElementChild.classList.toggle("fa-bars");
            Cpanel.topMenu.firstElementChild.classList.toggle("fa-times");

            Cpanel.subjectsPage.style.display = "block";
            Cpanel.studentsPage.style.display = "none";
            Cpanel.subjectNameHeading.style.display = "none";
            
        }//openSubjectsPage
        Cpanel.openSubjectPageItem.addEventListener("click",openSubjectsPage);
    },
    inputCharLeftCounter: function() {
        let inputValLength = this.value.length;
        let output = document.getElementById(this.getAttribute("data-output"));
        let maxChar = Number(this.getAttribute("data-maxChar"));
        let showChar = maxChar - inputValLength;
        (showChar < 0) ? showChar = 0 : true;
        if(showChar <= 0) {
            this.value = this.value.substring(0,maxChar);
        }
        output.innerText = showChar;
    },
    allowOnlyStrings: function() {
        if(this.value.trim() === "") {
            this.classList.add(Cpanel.warningBorder);
        }else {
            this.classList.remove(Cpanel.warningBorder);
            let lastTypedLetter = this.value.charAt(this.value.length-1);
            if(!isNaN(lastTypedLetter)) {
                this.value = this.value.replace(/[0-9]/g, "");
            }
        }
    },
    allowOnlyNumbers: function() {
        if(this.value.trim() === "") {
            this.classList.add(Cpanel.warningBorder);
        }else {
            this.classList.remove(Cpanel.warningBorder);
            let lastTypedLetter = this.value.charAt(this.value.length-1);
            if(isNaN(lastTypedLetter)) {
                this.value = this.value.replace(/[a-zA-Z]/g, "");
            }
        }
    },
    validBirthdate: function() {
        let pattern = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i;
        if(pattern.test(this.value)) {
            this.classList.remove(Cpanel.warningBorder);
        }else {
            this.classList.add(Cpanel.warningBorder);
        }

    },
    addressLengthLimiter: function() {
        if(this.value.trim() === "") {
            this.classList.add(Cpanel.warningBorder);
        }else {
            this.classList.remove(Cpanel.warningBorder);
            if(this.value.length > 40) {
                this.value = this.value.substring(0,40);
            }
        }
    },
    validateInputs: function() {
        Cpanel.newStudentFirstname.addEventListener("keyup",Cpanel.allowOnlyStrings);
        Cpanel.newStudentLastname.addEventListener("keyup",Cpanel.allowOnlyStrings);
        Cpanel.newStudentPersonalN.addEventListener("keyup",Cpanel.allowOnlyNumbers);
        Cpanel.newStudentBirthdate.addEventListener("keyup",Cpanel.validBirthdate);
        Cpanel.newStudentPhone.addEventListener("keyup",Cpanel.allowOnlyNumbers);
        Cpanel.newStudentAddress.addEventListener("keyup",Cpanel.addressLengthLimiter);
        Cpanel.editScoreInput.addEventListener("keyup",Cpanel.allowOnlyNumbers);

        Cpanel.editScoreInput.addEventListener("keyup",function(){
            if(this.value > 5 || this.value < 0) {
                this.value = this.value.replace(/[0-9]/g, "");
            }
        });

        Cpanel.editFirstnameInput.addEventListener("keyup",Cpanel.allowOnlyStrings);
        Cpanel.editLastnameInput.addEventListener("keyup",Cpanel.allowOnlyStrings);
        Cpanel.editPersonalNInput.addEventListener("keyup",Cpanel.allowOnlyNumbers);
        Cpanel.editBirthdateInput.addEventListener("keyup",Cpanel.validBirthdate);
        Cpanel.editPhoneInput.addEventListener("keyup",Cpanel.allowOnlyNumbers);
        Cpanel.editAddressInput.addEventListener("keyup",Cpanel.addressLengthLimiter);
    },
    validateRadios: function(radios) {
        let unchecked = 0;
        for(let i = 0; i < radios.length; i++) {                
            if(radios[i].checked) {
                unchecked++;
            }                
        }
        if(unchecked === 0) {
            radios[0].parentNode.classList.add(Cpanel.warningBorder);
        }else {
            radios[0].parentNode.classList.remove(Cpanel.warningBorder);
        }
    },
    loadStudentsList: function(subjectID) {
        let jsGeneratedtrs = document.getElementsByClassName("jsGenerated");
        var i = jsGeneratedtrs.length;
        while (i--) {
            jsGeneratedtrs[i].parentNode.removeChild(jsGeneratedtrs[i]);
        }
        let database = Cpanel.deserialize(localStorage.getItem(Cpanel.databaseName));
        let subjectsBase = database[1];

        for(let i = 0; i < subjectsBase.length; i++) {
            if(subjectsBase[i].id === Number(subjectID)) {
                for(let ii = 0; ii < subjectsBase[i].students.length; ii++) {
                    let currentStudent = subjectsBase[i].students[ii];                    
                    let absentDay = 0;
                    let totalStudentScore = 0;
                    for(let iii = 0; iii < currentStudent.scores.length; iii++) {
                        totalStudentScore += Number(currentStudent.scores[iii].score);
                        if(currentStudent.scores[iii].score === 0) {
                            absentDay++;
                        }
                    }

                    let grade;                    
                    if(totalStudentScore > 93) {grade = "A"}
                    if(totalStudentScore > 90) {grade = "A-"}
                    if(totalStudentScore > 88) {grade = "B+"}
                    if(totalStudentScore > 83) {grade = "B"}
                    if(totalStudentScore > 80) {grade = "B-"}
                    if(totalStudentScore > 78) {grade = "C+"}
                    if(totalStudentScore > 73) {grade = "C"}
                    if(totalStudentScore > 70) {grade = "C-"}
                    if(totalStudentScore > 68) {grade = "D+"}
                    if(totalStudentScore > 63) {grade = "D"}
                    if(totalStudentScore > 60) {grade = "D-"}
                    if(totalStudentScore > 63) {grade = "D"}
                    if(totalStudentScore > 59) {grade = "F+"}
                    if(totalStudentScore < 60) {grade = "E"}

                    let id = subjectsBase[i].students[ii].id;
                    let firstname = subjectsBase[i].students[ii].firstName;
                    let lastname = subjectsBase[i].students[ii].lastName;
                    let studentsListTbody = document.getElementById("studentsListTbody");
                    let leftTableHeading = document.getElementById("studentsListTableHeading");
                    let studentsListLastTr = document.getElementById("studentsListLastTr");
                    let tr = document.createElement("tr");
                    tr.classList.add("jsGenerated");
                    let td1 = document.createElement("td");
                    let td2 = document.createElement("td");
                    let span = document.createElement("span"); 
                    let $id = document.createTextNode(ii+1);
                    let name = document.createTextNode(firstname+" "+lastname);
                    td1.appendChild($id);
                    span.appendChild(name);
                    td2.appendChild(span);
                    tr.setAttribute("data-student-id",id);
                    tr.appendChild(td1);
                    tr.appendChild(td2);
                    studentsListTbody.insertBefore(tr,studentsListLastTr);

                    let infoContDiv = document.createElement("div");
                    infoContDiv.classList.add("popupInfo");
                    infoContDiv.innerHTML = `
                        <table class="popupInfo__table">
                            <tbody>
                                <tr>
                                    <td>PN:</td>
                                    <td>${currentStudent.personaN}</td>
                                </tr>
                                <tr>
                                    <td>Date:</td>
                                    <td>${currentStudent.birthDate}</td>
                                </tr>
                                <tr>
                                    <td>Gender:</td>
                                    <td>${currentStudent.gender}</td>
                                </tr>
                                <tr>
                                    <td>Email:</td>
                                    <td>${currentStudent.email}</td>
                                </tr>
                                <tr>
                                    <td>Phone:</td>
                                    <td>${currentStudent.phone}</td>
                                </tr>
                                <tr>
                                    <td>Address:</td>
                                    <td>${currentStudent.address}</td>
                                </tr>
                                <tr class="scoresTr">
                                    <td colspan="2" class="scoreGrade">
                                        <div>
                                            Total Score: <span class="totalScore">${totalStudentScore}</span>
                                        </div>
                                        <div>
                                            <span class="finalGrade" title="Grade">${grade}</span>
                                        </div>
                                        <div>
                                            <span class="totalAbsent" title="Total Absent">${absentDay}</span>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>`;
                        td2.appendChild(infoContDiv);   
                }//for
            }//if
        }
    },
    loadEditRemoveList: function(subjectID) {
        let editRemoveTrs = document.getElementsByClassName("editRemoveTr");
        var i = editRemoveTrs.length;
        while (i--) {
            editRemoveTrs[i].parentNode.removeChild(editRemoveTrs[i]);
        }

        let database = Cpanel.deserialize(localStorage.getItem(Cpanel.databaseName));
        let subjectsBase = database[1];
        for(let i = 0; i < subjectsBase.length; i++) {
            if(subjectsBase[i].id === Number(subjectID)) {
                let editRemoveTrs = document.getElementsByClassName("editRemoveTr");
                if(editRemoveTrs.length) {
                    for(let i = 0; i < editRemoveTrs.length; i++) {
                        editRemoveTrs[i].parentNode.removeChild(editRemoveTrs[i]);
                    }
                }
                for(let ii = 0; ii < subjectsBase[i].students.length; ii++) {
                    let currentStudent = subjectsBase[i].students[ii];
                    let id = subjectsBase[i].students[ii].id;
                    let firstname = subjectsBase[i].students[ii].firstName;
                    let lastname = subjectsBase[i].students[ii].lastName;
                    let editRemoveTableTbody = document.getElementById("editRemoveTableTbody");
                    let editRemoveTableLastTr = document.getElementById("editRemoveTableLastTr");
                    let tr = document.createElement("tr");
                    tr.classList.add("editRemoveTr");
                    tr.innerHTML = `
                        <td>
                            <button class="editBtn" data-subject-id="${subjectID}" data-student-id="${id}"><i class="fa fa-pencil" aria-hidden="true"></i> Edit</button>
                            <button class="deleteBtn" data-subject-id="${subjectID}" data-student-id="${id}"><i class="fa fa-times-circle" aria-hidden="true"></i>Delete</button>
                        </td>`;
                    editRemoveTableTbody.insertBefore(tr,editRemoveTableLastTr);
                }//for
            }//if
        }//for Main
        Cpanel.editStudent();
        Cpanel.removeStudent();
    },
    removeVirtualElements: function() {
        let jsGeneratedtrs = document.getElementsByClassName("jsGenerated");
        if(jsGeneratedtrs.length) {
            for(let i = 0; i < jsGeneratedtrs.length; i++) {
                jsGeneratedtrs[i].parentNode.removeChild(jsGeneratedtrs[i]);
            }
        }

        let editRemoveTrs = document.getElementsByClassName("editRemoveTr");
        if(editRemoveTrs.length) {
            for(let i = 0; i < editRemoveTrs.length; i++) {
                editRemoveTrs[i].parentNode.removeChild(editRemoveTrs[i]);
            }
        }
    },
    loadStudentsScores: function(subjectID) {
        let database = Cpanel.deserialize(localStorage.getItem(Cpanel.databaseName));
        let subjectsBase = database[1];
        let middleTableTbodyScores = document.getElementById("middleTableTbodyScores");
    },
    addNewDay: function() {
        let newDayBtn = document.getElementById("newDayBtn");
        function insertNewDay() {
            let database = Cpanel.deserialize(localStorage.getItem(Cpanel.databaseName));
            let subjectsBase = database[1];
            let currentSubject = Number(Cpanel.studentsPage.getAttribute("data-id"));
            for(let i = 0; i < subjectsBase.length; i++) {
                if(subjectsBase[i].id === currentSubject) {
                    let endDate = subjectsBase[i].endDate;
                    let endDateArr = endDate.split("/");
                    let increaseDay = Number(endDateArr[1])+1;           

                    let newEndDate = new Date(endDate);
                    newEndDate.setDate(increaseDay);
                    let newEndDateChangedFormat = Cpanel.changeDateFormat(new Date(newEndDate));
                    subjectsBase[i].endDate = newEndDateChangedFormat;
                    localStorage.setItem(Cpanel.databaseName,Cpanel.serialize(database));  
                    Cpanel.generateTrs(currentSubject);
                }
            }
        }//insertNewDay
        newDayBtn.addEventListener("click",insertNewDay);
    },
    removeLastDay: function() {
        function removeVeryLastDay() {
            let database = Cpanel.deserialize(localStorage.getItem(Cpanel.databaseName));
            let subjectsBase = database[1];

            let currentSubject = Number(Cpanel.studentsPage.getAttribute("data-id"));
            let totalDay = Cpanel.middleTableTbodyScores.getElementsByTagName("tr")[0].getElementsByTagName("td").length;

            for(let i = 0; i < subjectsBase.length; i++) {
                if(subjectsBase[i].id === currentSubject) {
                    let endDate = subjectsBase[i].endDate;
                    let endDateArr = endDate.split("/");
                    let decreaseDay = Number(endDateArr[1])-1;        

                    let newEndDate = new Date(endDate);
                    newEndDate.setDate(decreaseDay);
                    let newEndDateChangedFormat = Cpanel.changeDateFormat(new Date(newEndDate));
                    subjectsBase[i].endDate = newEndDateChangedFormat;

                    for(let ii = 0; ii < subjectsBase[i].students.length; ii++) {
                        for(let iii = 0; iii < subjectsBase[i].students[ii].scores.length; iii++) {
                            if(subjectsBase[i].students[ii].scores[iii].y === totalDay) {
                                let scoreToRemove = subjectsBase[i].students[ii].scores.indexOf(subjectsBase[i].students[ii].scores[iii]);
                                subjectsBase[i].students[ii].scores.splice(scoreToRemove, 1);
                            }
                        }
                    }

                    localStorage.setItem(Cpanel.databaseName,Cpanel.serialize(database));  
                    Cpanel.generateTrs(currentSubject);
                }
            }
        }//removeVeryLastDay
        let removeDayBtn = document.getElementById("removeDayBtn");

        removeDayBtn.addEventListener("click",removeVeryLastDay);
    },
    generateTrs: function(subjectID) {
        let database = Cpanel.deserialize(localStorage.getItem(Cpanel.databaseName));
        let subjectsBase = database[1];
            for(let i = 0; i < subjectsBase.length; i++) {
                if(subjectsBase[i].id === Number(subjectID)) {
                    let currentSubject = subjectsBase[i];
                    Cpanel.middleTableTbodyScores.innerHTML = "";
                    if(currentSubject.students.length !== 0) {
                        for(let ii = -2; ii < currentSubject.students.length; ii++) {
                            let tr = document.createElement("tr");
                            if(ii === -2) {
                                tr.setAttribute("data-date","Months");
                            }else if(ii == -1) {
                                tr.setAttribute("data-date","WeekDays");
                            }else if(ii >= 0) {
                                tr.setAttribute("data-student-id",currentSubject.students[ii].id);
                            }
                            let start = new Date(currentSubject.startDate),
                            end = new Date(currentSubject.endDate),        
                            year = start.getFullYear(),
                            month = start.getMonth()
                            day = start.getDate(),
                            dates = [start];

                            while(dates[dates.length-1] < end) {
                                dates.push(new Date(year, month, ++day));
                            }
                            for(let i = 0; i < dates.length; i++) {
                                let weekDay = dates[i].toString().split(" ")[0];
                                let $date = dates[i].toString().split(" ")[1] +" "+dates[i].toString().split(" ")[2]+" "+dates[i].toString().split(" ")[3];
                               
                                let td = document.createElement("td");
                                if(tr.getAttribute("data-date") == "Months") {
                                    td.innerHTML = $date;
                                    tr.appendChild(td);
                                }else if (tr.getAttribute("data-date") == "WeekDays") {
                                    td.innerHTML = weekDay;
                                    tr.appendChild(td);
                                }else {
                                    td.setAttribute("data-x",currentSubject.students[ii].id);
                                    td.setAttribute("data-y",i+1);
                                    let span = document.createElement("span");
                                    span.classList.add("scoreSpan");
                                    td.appendChild(span);
                                    tr.appendChild(td)
                                }
                            }                         
                            Cpanel.middleTableTbodyScores.appendChild(tr);
                        }                       
                    }//if
                }
            }
        Cpanel.editScore();
        Cpanel.loadScore(subjectID);
    },
    editScore: function() {
        Cpanel.closeEditScoreBtn.addEventListener("click",function(){
            Cpanel.editStudentScoreSect.style.display = "none";           
        });
        Cpanel.saveChangedScoreBtn.addEventListener("click",function(){

            let database = Cpanel.deserialize(localStorage.getItem(Cpanel.databaseName));
            let subjectsBase = database[1];

            let subjectId = Number(Cpanel.editScoreInput.getAttribute("data-subject-id"));
            let studentId = Number(Cpanel.editScoreInput.getAttribute("data-student-id"));
            if(Cpanel.editScoreInput.value.trim() !== "") {
                let x = Number(Cpanel.editScoreInput.getAttribute("data-x"));
                let y = Number(Cpanel.editScoreInput.getAttribute("data-y"));
                let val = Number(Cpanel.editScoreInput.value);

                for(let i = 0; i < subjectsBase.length; i++) {
                    if(subjectsBase[i].id === subjectId) {
                        for(let ii = 0; ii < subjectsBase[i].students.length; ii++) {
                            if(subjectsBase[i].students[ii].id === studentId) {
                                let currentStudent = subjectsBase[i].students[ii];
                                (val > 5) ? val = 5 : (val < 0) ? val = 0 : true;
                                let score = new Cpanel.Score(val,x,y);

                                if(currentStudent.scores.length === 0) {
                                    currentStudent.scores.push(score);                                
                                    localStorage.setItem(Cpanel.databaseName,Cpanel.serialize(database));
                                    Cpanel.editStudentScoreSect.style.display = "none";
                                    Cpanel.editScoreInput.value = "";
                                }else {
                                    let matchedScoreAndTd = 0;
                                    for(let iii = 0; iii < currentStudent.scores.length; iii++) {
                                        if(currentStudent.scores[iii].x === x && currentStudent.scores[iii].y === y) {
                                            currentStudent.scores[iii].score = val;
                                            localStorage.setItem(Cpanel.databaseName,Cpanel.serialize(database));
                                            matchedScoreAndTd++;
                                            Cpanel.editStudentScoreSect.style.display = "none";
                                            Cpanel.editScoreInput.value = "";
                                        }
                                    }
                                    if(matchedScoreAndTd === 0) {
                                        currentStudent.scores.push(score);  
                                        localStorage.setItem(Cpanel.databaseName,Cpanel.serialize(database));
                                        Cpanel.editStudentScoreSect.style.display = "none";
                                        Cpanel.editScoreInput.value = "";
                                    }
                                }
                            }
                        }
                    }
                }
            }
            Cpanel.loadScore(subjectId);
        });

        let spans = Cpanel.middleTableTbodyScores.getElementsByClassName("scoreSpan");
        for(let i = 0; i < spans.length; i++) {
            spans[i].addEventListener("click",function(){
                if(spans[i].innerHTML === "") {
                    Cpanel.scoreHeading.innerHTML = "Add Score";
                }else {
                    Cpanel.scoreHeading.innerHTML = "Edit Score";
                }

                Cpanel.editScoreInput.value = this.innerHTML;
                Cpanel.editScoreInput.setAttribute("data-subject-id",Cpanel.subjectNameHeading.getAttribute("data-subject-id"));
                Cpanel.editScoreInput.setAttribute("data-student-id",this.parentNode.getAttribute("data-x"));
                Cpanel.editScoreInput.setAttribute("data-x",this.parentNode.getAttribute("data-x"));
                Cpanel.editScoreInput.setAttribute("data-y",this.parentNode.getAttribute("data-y"));

                Cpanel.editStudentScoreSect.style.display = "block";
            });
        }
    },
    loadScore: function(subjectID) {
        let database = Cpanel.deserialize(localStorage.getItem(Cpanel.databaseName));
        let subjectsBase = database[1];
        let subjectId = Number(subjectID);

        let currentSubject;
        for(let i = 0; i < subjectsBase.length; i++) {
            if(subjectsBase[i].id === subjectId) {
                currentSubject = subjectsBase[i];
            }
        }

        let tds = Cpanel.middleTableTbodyScores.getElementsByTagName("td");
        for(let ii = 0; ii < tds.length; ii++) {
            let currentTd = tds[ii];
            let x = Number(currentTd.getAttribute("data-x"));
            let y = Number(currentTd.getAttribute("data-y"));

            for(let iii = 0; iii < currentSubject.students.length; iii++) {
                let currentStudent = currentSubject.students[iii];
                for(let iiii = 0; iiii < currentStudent.scores.length; iiii++) {
                    let currentScore = currentStudent.scores[iiii];
                    if(currentScore.x === x && currentScore.y === y) {
                        currentTd.getElementsByTagName("span")[0].innerHTML = currentScore.score;
                        if((currentScore.score > -Infinity && currentScore.score < 0) || (currentScore.score > 0 && currentScore.score <= 4)) {
                            currentTd.getElementsByTagName("span")[0].style.backgroundColor = "orange";
                        }else if(currentScore.score == 0){
                            currentTd.getElementsByTagName("span")[0].style.backgroundColor = "red";
                        }else if(currentScore.score == 5){
                            currentTd.getElementsByTagName("span")[0].style.backgroundColor = "green";
                        }                 
                    }
                }
            }
        }
        Cpanel.loadStudentsList(currentSubject.id);
    },
    changeDateFormat: function(currentDate) {
        let splitedDate = currentDate.toString().split(" ");
        newFormat = splitedDate[1]+"/"+splitedDate[2]+"/"+splitedDate[3];
        return newFormat;
    },
    changeEmailAndPassword: function() {
        Cpanel.settingsBtn.addEventListener("click",function(){
            Cpanel.fullscreenMenuList.style.display = "none";
            Cpanel.settingsPage.style.display = "block";
            Cpanel.currentEmailInput.value = "";
            Cpanel.newEmailInput.value = "";
            Cpanel.confirmEmailInput.value = "";
            Cpanel.newEmailInput.classList.remove(Cpanel.warningBorder);
            Cpanel.confirmEmailInput.classList.remove(Cpanel.warningBorder);
            Cpanel.currentEmailInput.classList.remove(Cpanel.warningBorder);

            Cpanel.currentPasswordInput.value = "";
            Cpanel.newPasswordInput.value = "";
            Cpanel.confirmNewPassInput.value = "";
            Cpanel.newPasswordInput.classList.remove(Cpanel.warningBorder);
            Cpanel.confirmNewPassInput.classList.remove(Cpanel.warningBorder);
            Cpanel.currentPasswordInput.classList.remove(Cpanel.warningBorder);
        });
        Cpanel.closeSettingsPageBtn.addEventListener("click",function(){
            Cpanel.fullscreenMenuList.style.display = "flex";
            Cpanel.settingsPage.style.display = "none";
        });
        Cpanel.topMenu.addEventListener("click",function(){
            Cpanel.settingsPage.style.display = "none";
            Cpanel.fullscreenMenuList.style.display = "flex";
        });

        function changeEmail() {
            let wrongEmail = 0;
            let correctFormat = false;
            (Cpanel.emailValidator(Cpanel.currentEmailInput.value)) ? Cpanel.currentEmailInput.classList.remove(Cpanel.warningBorder) : (Cpanel.currentEmailInput.classList.add(Cpanel.warningBorder), wrongEmail++);
            (Cpanel.emailValidator(Cpanel.newEmailInput.value)) ? Cpanel.newEmailInput.classList.remove(Cpanel.warningBorder) : (Cpanel.newEmailInput.classList.add(Cpanel.warningBorder), wrongEmail++);
            (Cpanel.emailValidator(Cpanel.confirmEmailInput.value)) ? Cpanel.confirmEmailInput.classList.remove(Cpanel.warningBorder) : (Cpanel.confirmEmailInput.classList.add(Cpanel.warningBorder), wrongEmail++);
        
            if(wrongEmail === 0) {
                if(Cpanel.newEmailInput.value !== Cpanel.confirmEmailInput.value){
                    Cpanel.newEmailInput.classList.add(Cpanel.warningBorder);
                    Cpanel.confirmEmailInput.classList.add(Cpanel.warningBorder);                    
                }else {
                    Cpanel.newEmailInput.classList.remove(Cpanel.warningBorder);
                    Cpanel.confirmEmailInput.classList.remove(Cpanel.warningBorder);
                    correctFormat = true;
                }
            }
            if(correctFormat) {
                let loggedTeacher = Cpanel.deserialize(sessionStorage.getItem("loginInfo"));
                let database = Cpanel.deserialize(localStorage.getItem(Cpanel.databaseName));
                let subjectsBase = database[1];
                let teachersBase = database[0];
                let oldEmail = loggedTeacher.email;

                if(Cpanel.currentEmailInput.value !== loggedTeacher.email) {
                    Cpanel.currentEmailInput.classList.add(Cpanel.warningBorder);                    
                }else {
                    Cpanel.currentEmailInput.classList.remove(Cpanel.warningBorder);  
                    let inUseEmail = 0;
                    for(let i = 0; i < teachersBase.length; i++) {
                        if(teachersBase[i].email === Cpanel.newEmailInput.value) {
                            inUseEmail++;
                        }
                    }
                    if(inUseEmail > 0) {
                        Cpanel.newEmailInput.classList.add(Cpanel.warningBorder);
                    }else {
                        Cpanel.newEmailInput.classList.remove(Cpanel.warningBorder);
                        loggedTeacher.email = Cpanel.newEmailInput.value;
                        for(let i = 0; i < subjectsBase.length; i++) {
                            if(subjectsBase[i].teacher === oldEmail) {
                                subjectsBase[i].teacher = Cpanel.newEmailInput.value;
                            }
                        }
                        for(let i = 0; i < teachersBase.length; i++) {
                            if(teachersBase[i].email === oldEmail) {
                                teachersBase[i].email = Cpanel.newEmailInput.value;
                            }
                        }
                        
                        localStorage.setItem(Cpanel.databaseName,Cpanel.serialize(database));
                        sessionStorage.setItem("loginInfo",Cpanel.serialize(loggedTeacher));
                        Cpanel.settingsPage.style.display = "none";
                        Cpanel.fullscreenMenuList.style.display = "flex";
                        Cpanel.fullScreenMenuPage.classList.toggle(Cpanel.showSection);////
                        Cpanel.topMenu.firstElementChild.classList.toggle("fa-bars");
                        Cpanel.topMenu.firstElementChild.classList.toggle("fa-times");
                    }
                }
            }
        }//changeEmail

        function changePassword() {
            let correctFormat = false;
                let emptyInput = 0;
                let inputs = [Cpanel.currentPasswordInput,Cpanel.newPasswordInput,Cpanel.confirmNewPassInput];
                inputs.map(function(el,index){
                    if(el.value === "") {
                        el.classList.add(Cpanel.warningBorder);
                        emptyInput++;
                    }else {
                        el.classList.remove(Cpanel.warningBorder);
                    }
                });

                if(emptyInput === 0) {
                    if(Cpanel.newPasswordInput.value !== Cpanel.confirmNewPassInput.value){
                        Cpanel.newPasswordInput.classList.add(Cpanel.warningBorder);
                        Cpanel.confirmNewPassInput.classList.add(Cpanel.warningBorder);                    
                    }else {
                        Cpanel.newPasswordInput.classList.remove(Cpanel.warningBorder);
                        Cpanel.confirmNewPassInput.classList.remove(Cpanel.warningBorder);
                        correctFormat = true;
                    }
                }

            if(correctFormat) {
                let loggedTeacher = Cpanel.deserialize(sessionStorage.getItem("loginInfo"));
                let database = Cpanel.deserialize(localStorage.getItem(Cpanel.databaseName));
                let teachersBase = database[0];

                for(let i = 0; i < teachersBase.length; i++) {
                    if(teachersBase[i].email === loggedTeacher.email) {
                        if(teachersBase[i].password === Cpanel.currentPasswordInput.value) {
                            Cpanel.currentPasswordInput.classList.remove(Cpanel.warningBorder);
                            teachersBase[i].password = Cpanel.newPasswordInput.value;
                            localStorage.setItem(Cpanel.databaseName,Cpanel.serialize(database));

                            Cpanel.settingsPage.style.display = "none";
                            Cpanel.fullscreenMenuList.style.display = "flex";
                            Cpanel.fullScreenMenuPage.classList.toggle(Cpanel.showSection);////
                            Cpanel.topMenu.firstElementChild.classList.toggle("fa-bars");
                            Cpanel.topMenu.firstElementChild.classList.toggle("fa-times");
                        }else {
                            Cpanel.currentPasswordInput.classList.add(Cpanel.warningBorder);
                        }
                    }
                }
            }
        }//changePassword
        Cpanel.changeEmailBtn.addEventListener("click",changeEmail);
        Cpanel.changePasswordBtn.addEventListener("click",changePassword);

        function validatePassword(e) {
            let string = this.value;
            let counter = 0;
            let strength;

            (string.length > 1) ? counter++ : true;
            (string.length > 2) ? counter++ : true;
            (string.length > 3) ? counter++ : true;
            (string.length > 4) ? counter++ : true;
            (string.length > 5) ? counter++ : true;
            (string.length > 6) ? counter++ : true;
            (string.length > 7) ? counter++ : true;
            (string.length > 8) ? counter++ : true;
            (string.length > 9) ? counter++ : true;

            (/[a-z]/.test(string))    ? counter++ : true;
            (/[A-Z]/.test(string))    ? counter++ : true;
            (/[0-9]/.test(string))    ? counter++ : true;
            (/[!@#$&*]/.test(string)) ? counter++ : true;

            (counter == 0) ? strength = "Strength" : (counter > 0 && counter <= 4) ? strength = "Weak" : (counter >= 5 || counter <= 7) ? strength = "Medium" : (counter > 7) ? strength = "Strong" : true;
            Cpanel.passwordStrengthViewer.className = "n"+counter;
            Cpanel.passwordStrengthTxt.innerHTML = strength;
        }

        Cpanel.newPasswordInput.addEventListener("keyup",validatePassword);
    },
    statistic: function() {
        function showStatisticInfo() {
            Cpanel.mainHeading.innerHTML = "Statistic";
            Cpanel.subjectNameHeading.style.display = "none";
            Cpanel.statisticPage.style.display = "block";
            Cpanel.fullScreenMenuPage.classList.toggle(Cpanel.showSection);
            Cpanel.topMenu.firstElementChild.classList.toggle("fa-bars");
            Cpanel.topMenu.firstElementChild.classList.toggle("fa-times");

            let loggedTeacher = Cpanel.deserialize(sessionStorage.getItem("loginInfo"));
            let database = Cpanel.deserialize(localStorage.getItem(Cpanel.databaseName));
            let subjectsBase = database[1];

            /*-------------------------------------------------------------------------*/
            function totalStudentCalc() {
                let sumOfStudents = 0;
                for(let i = 0; i < subjectsBase.length; i++) {
                   if(subjectsBase[i].teacher === loggedTeacher.email) {
                     sumOfStudents += subjectsBase[i].students.length;
                   }
                }
                return sumOfStudents;
            }//totalStudentCalc
            Cpanel.totalStudent.innerHTML = totalStudentCalc();
            /*--------------------------------------------------------------------------*/

            /*--------------------------------------------------------------------------*/
            function averageAgeCalc() {
                function getAge(birth) {
                    var today = new Date();
                    var curr_date = today.getDate();
                    var curr_month = today.getMonth() + 1;
                    var curr_year = today.getFullYear();
                 
                    var pieces = birth.split('/');
                    var birth_date = pieces[0];
                    var birth_month = pieces[1];
                    var birth_year = pieces[2];
                 
                    if (curr_month == birth_month && curr_date >= birth_date) return parseInt(curr_year-birth_year);
                    if (curr_month == birth_month && curr_date < birth_date) return parseInt(curr_year-birth_year-1);
                    if (curr_month > birth_month) return parseInt(curr_year-birth_year);
                    if (curr_month < birth_month) return parseInt(curr_year-birth_year-1);
                 }
                 
                //getAge('16/05/1992');
                let sumOfStudentsAge = 0;
                let student = 0;
                for(let i = 0; i < subjectsBase.length; i++) {
                   if(subjectsBase[i].teacher === loggedTeacher.email) {
                      for(let ii = 0; ii < subjectsBase[i].students.length; ii++) {
                          let studentBirthdate = subjectsBase[i].students[ii].birthDate.toString();
                          sumOfStudentsAge += Number(getAge(studentBirthdate));
                          student++;
                      }
                   }
                }
                let result = Math.round(sumOfStudentsAge / student);
                (isNaN(result)) ? result = 0 : true;
                return result;
            }//averageAgeCalc
            Cpanel.averageAge.innerHTML = averageAgeCalc();
            /*--------------------------------------------------------------------------*/

            /*--------------------------------------------------------------------------*/
            function averageScoreCalc() {
                let sumOfScores = 0;
                let scoreCount = 0;
                for(let i = 0; i < subjectsBase.length; i++) {
                   if(subjectsBase[i].teacher === loggedTeacher.email) {
                      for(let ii = 0; ii < subjectsBase[i].students.length; ii++) {
                         for(let iii = 0; iii < subjectsBase[i].students[ii].scores.length; iii++) {
                            sumOfScores += Number(subjectsBase[i].students[ii].scores[iii].score);
                            scoreCount++;
                         }
                      }
                   }
                }
                let result = Math.round(sumOfScores / scoreCount);
                (isNaN(result)) ? result = 0 : true;
                return result;
            }//averageScoreCalc
            Cpanel.averageScore.innerHTML = averageScoreCalc();
            /*--------------------------------------------------------------------------*/

            /*--------------------------------------------------------------------------*/
            function countGender() {
                let male = 0;
                let female = 0;
                for(let i = 0; i < subjectsBase.length; i++) {
                   if(subjectsBase[i].teacher === loggedTeacher.email) {
                      for(let ii = 0; ii < subjectsBase[i].students.length; ii++) {
                          if(subjectsBase[i].students[ii].gender === "male") {
                            male++;
                          }else if(subjectsBase[i].students[ii].gender === "female") {
                            female++;
                          }
                      }
                   }
                }
                Cpanel.totalMale.innerHTML = male;
                Cpanel.totalFemale.innerHTML = female;
            }//countGender
            countGender();
            /*--------------------------------------------------------------------------*/

            /*--------------------------------------------------------------------------*/
            function missedLessonsCalc() {
                let missedDay = 0;
                for(let i = 0; i < subjectsBase.length; i++) {
                    if(subjectsBase[i].teacher === loggedTeacher.email) {
                       for(let ii = 0; ii < subjectsBase[i].students.length; ii++) {
                          for(let iii = 0; iii < subjectsBase[i].students[ii].scores.length; iii++) {
                              if(subjectsBase[i].students[ii].scores[iii].score == 0) {
                                missedDay++;
                              }
                          }
                       }
                    }
                 }
                 return missedDay;
            }//missedLessonsCalc    
            Cpanel.missedLessons.innerHTML = missedLessonsCalc();
        }//showStatisticInfo
        Cpanel.statisticBtn.addEventListener("click",showStatisticInfo);
    }
}//Cpanel   
Cpanel.createDatabase();
Cpanel.login();
Cpanel.logout();
Cpanel.newSubject();
Cpanel.loadSubject();
Cpanel.editSubject();
Cpanel.deleteSubject();
Cpanel.loadStudents();
Cpanel.newStudent();
Cpanel.validateInputs();
Cpanel.addNewDay();
Cpanel.removeLastDay();
Cpanel.fullScreenMenu();
Cpanel.changeEmailAndPassword();
Cpanel.statistic();

