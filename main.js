let array = [
    {
        id: 1,
        value: 'Value 1',
        deleted: false,
        is_visible: true
    },
    {
        id: 2,
        value: 'Value 2',
        deleted: true,
        is_visible: true
    },
    {
        id: 3,
        value: 'Value 3',
        deleted: false,
        is_visible: false
    },
    {
        id: 4,
        value: 'Value 4',
        deleted: true,
        is_visible: true
    },
    {
        id: 5,
        value: 'Value 5',
        deleted: false,
        is_visible: true
    }
];

// milestone_1_2
// milestone_3
// milestone_4

function init() {

    let milestone_1_2 = [];
    let milestone_3 = [];
    let milestone_4 = [];

    array.map((item) => {
        if (!item.deleted && item.is_visible) {
            milestone_1_2.push(item);
            milestone_3.push(item);
            milestone_4.push(item);
        }
    });

}

init();
