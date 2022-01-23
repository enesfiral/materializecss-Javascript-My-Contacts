// Giriş Elemanı
let filterInput = document.getElementById('filterInput');

// Olay Dinleyicisi ekle
filterInput.addEventListener('keyup', filterNames);


function filterNames() {

    // Girişin değerini al
    let filterValue =
    document.getElementById('filterInput').value.toUpperCase()
    
    // ul adlarını al
    let ul = document.getElementById('names');

    //ul'den liste al
    let li = ul.querySelectorAll ('li.collection-item');


    for(let i = 0;i < li.length;i++) {
        let a = li[i].getElementsByTagName('a')[0];

        if(a.innerHTML.toUpperCase().indexOf(filterValue) >
        -1) {
            li[i].style.display = '';
        } else {
            li[i].style.display = 'none';
        }
    }


    }
    


