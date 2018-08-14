function addNewProject() {
    tbody = document.getElementById("tbodyItems");
    projctDet = document.getElementById("collapseDetails");

    titleCol=document.createElement("td");
    titleCol.innerHTML = $('#title').val();    

    startDateCol=document.createElement("td");
    startDateCol.innerHTML = $('#startDate').val();

    endDateCol=document.createElement("td");
    endDateCol.innerHTML = $('#endDate').val();

    roleCol=document.createElement("td");
    roleCol.innerHTML = $('#role').val();

    architectureCol=document.createElement("td");
    architectureCol.innerHTML = $('#architecture').val();

    technologyCol=document.createElement("td");
    technologyCol.innerHTML = $('#technology').val();

    rnrCol=document.createElement("td");
    rnrCol.innerHTML = $('#rnr').val();

    actionCol=document.createElement("td");
    actionHTML = $('#actionBtns').html();

    var rowCount = $('#projectTable >tbody >tr').length;
    var rowId="collapseDetails"+(rowCount+2);
   
    actionCol.innerHTML=actionHTML.replace("collapseDetails1",rowId); 
    actionHTML.lastIndexOf("collapseDetails1");
    actionCol.innerHTML.lastIndexOf("collapseDetails1"); 

    newProject = document.createElement("tr");
    newProject.append(titleCol);
    newProject.append(startDateCol);
    newProject.append(endDateCol);
    newProject.append(roleCol);
    newProject.append(actionCol);

    tbody.append(newProject);


    newProjectDetails = document.createElement("tr");

    newtd = document.createElement("td");
    
    newProjectDetailsTable = document.createElement("table");
    
    architectureDetailsRow= document.createElement("tr");;
    architectureDetailsRow.append("Architecture");
    architectureDetailsRow.append(architectureCol);

    technologyDetailsRow= document.createElement("tr");;
    technologyDetailsRow.append("Technology");
    technologyDetailsRow.append(technologyCol);

    rnrDetailsRow= document.createElement("tr");;
    rnrDetailsRow.append("Roles and Responsibilities");
    rnrDetailsRow.append(rnrCol);

        
    newProjectDetailsTable.setAttribute("class","table");
    newProjectDetailsTable.setAttribute("class","table-responsive");
    newProjectDetailsTable.append(architectureDetailsRow);
    newProjectDetailsTable.append(technologyDetailsRow);
    newProjectDetailsTable.append(rnrDetailsRow);

    newtd.setAttribute("colspan", 5);
    newtd.appendChild(newProjectDetailsTable);    
    
        
    newProjectDetails.setAttribute("class","collapse")
    newProjectDetails.setAttribute("id", rowId);
    newProjectDetails.append(newtd);
    tbody.append(newProjectDetails);

}
