/**
* create datas table array header and content
*
* @return datas
*/
export const columnItems = [
    { header: "First Name", dataField: "firstName", isSortable: true,},
    { header: "Last Name", dataField: "lastName", isSortable: true,},
    { header: "Start Date", dataField: "startDate", isSortable: true,},
    { header: "Department", dataField: "department", isSortable: true, },
    { header: "Date Of Birth", dataField: "dateOfBirth", isSortable: true,}, 
    { header: "Street", dataField:"street", isSortable: true,},
    { header: "City", dataField:"city", isSortable: true,},
    { header: "State", dataField:"state", isSortable: true,},
    { header: "Zip Code", dataField:"zipCode", isSortable: true,},
]


const id = document.getElementsByClassName("iqBCQs")

for (let index = 0; index < id.length; index++) {
    const element = id[index];
    const keys = Object.keys(element);
    const key = keys[1]
    const object = element[key]
    delete element.key
    element.removeAttribute("aria-description")
    console.log(object)
}
  