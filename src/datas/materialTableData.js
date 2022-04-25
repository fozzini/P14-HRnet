export const columnItems = [
    { title: "First Name", field: "firstName"},
    { title: "First Name", field: "firstName"},
    { title: "Last Name", field: "lastName"},
    { title: "Start Date", field: "startDate"},
    { title: "Department", field: "department" },
    { title: "Date Of Birth", field: "dateOfBirth"}, 
    { title: "Street", field:"street"},
    { title: "City", field:"city"},
    { title: "State", field:"state"},
    { title: "Zip Code", field:"zipCode"},
]

export const columns =
columnItems.map( col => { 
    const container = {};
        container.title = col.title;
        container.field = col.field;
        container.cellStyle =  {
            color: '#000',
            fontSize:'small'
        };
        container.headerStyle = {
            backgroundColor: 'rgb(204, 201, 170)',
            fontWeight: 'bolder',
            color:'#fff'
        };
    return container;
})
