let array = [
    {
        id: 1,
        value: 'Value 1',
        deleted: false
    },
    {
        id: 2,
        value: 'Value 2',
        deleted: true
    },
    {
        id: 3,
        value: 'Value 3',
        deleted: false
    },
    {
        id: 4,
        value: 'Value 4',
        deleted: true
    },
    {
        id: 5,
        value: 'Value 5',
        deleted: false
    }
];

// milestone_3

function init() {

    let milestone_3 = [];

    array.map((item) => {
        if (!item.deleted) {
            milestone_3.push(item);
        }
    });
    
}

init();
