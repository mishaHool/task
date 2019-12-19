let openC = document.getElementsByClassName('butt')[0];
let topper = document.getElementsByClassName('topper-div')[0];
let tasks = document.getElementById('tasks');
let cancel = document.getElementsByClassName('cancel')[0];
let apply = document.getElementsByClassName('apply')[0];
let tittle = document.getElementsByClassName('tittle')[0];
let desc = document.getElementsByClassName('desc')[0];
let prior = document.getElementsByClassName('prior')[0];
let triTochki;
let menuVipad;
let done;
let edit;
let del;

class fileSystem{
    constructor(){
    this.taskss = []
    }
    addTask(title, desc, prior){
        let data = Date.now();
        this.taskss.push({
            index: data,
            title: title,
            desc: desc,
            prio: prior,
            done: false,
            hiddened: false,
        });
    }
    doneTask(ind){
        for(i=0;i<this.taskss.length;i++){
            let a = this.taskss[i];
            if(a.index == ind){
                a.done = true;
                showTasks(this.taskss)
            }
        }
    }
    editTask(ind, titlle, deesc, pria){
        for(i=0;i<this.taskss.length;i++){
            let t = this.taskss[i];
            if(t.index == ind){

            }
        }
    }
    removeTask(index){
        for(i=0;i<this.taskss.length;i++){
            let a = this.taskss[i];
            if(a.index == index){
                this.taskss.splice(i, 1)
                showTasks(this.taskss)
            }
        }
    }
}

let file = new fileSystem();


openC.addEventListener('click', function(){
    topper.style.display = 'flex';
    tasks.style.display = 'none';
})
apply.addEventListener('click', function(){
    file.addTask(tittle.value, desc.value, prior.value);
    showTasks(file.taskss)
    clearData()
    topper.style.display = 'none';
    tasks.style.display = 'flex'
});
cancel.addEventListener('click', function(){
    clearData()
    topper.style.display = 'none';
    tasks.style.display = 'flex'
});


function instruments(){
    triTochki = document.getElementsByClassName('tri-tochki');
    menuVipad = document.getElementsByClassName('menu-vipad');
    done = document.getElementsByClassName('done');
    edit = document.getElementsByClassName('edit');
    del = document.getElementsByClassName('del')

    for (i = 0;i<triTochki.length;i++) {
        let a = triTochki[i];
        let b = menuVipad[i];
        a.addEventListener('click', function() {
            b.classList.toggle('displayBlock');
        });
    }

    for(i=0;i<done.length;i++){
        let c = done[i]
        c.addEventListener('click', function(){
            let c1 = c.getAttribute('data-index')
            file.doneTask(c1);
        })
    }
    for(i=0;i<del.length;i++){
        let d = del[i];
        d.addEventListener('click', function(){
            let d1 = d.getAttribute('data-index');
            file.removeTask(d1);
        })
    }
    }
    
function showTasks(arr){
    let a = document.getElementById('css')
    if(a != null) a.remove();
    let s = document.createElement('div')
    s.id = 'css';

    for(i=0; i<arr.length; i++){
        let taske = document.createElement('div')
        taske.classList.add('task')

        if(arr[i].done == true) taske.classList.add('backgroundGray');

        let tit = document.createElement('div');
        tit.classList.add('title');
        tit.innerText = arr[i].title;
        taske.appendChild(tit);

        let descr = document.createElement('div');
        descr.classList.add('descr');
        descr.innerText = arr[i].desc
        taske.appendChild(descr);

        let bott = document.createElement('div');
        bott.classList.add('bott')
        taske.appendChild(bott);

        let prior = document.createElement('div');
        prior.classList.add('prior');
        prior.innerText = arr[i].prio;
        bott.appendChild(prior);

        let menu = document.createElement('div');
        menu.classList.add('menu');

        triTochki = document.createElement('div')
        triTochki.classList.add('tri-tochki');
        triTochki.innerText = '...'
        triTochki.dataset.index = arr[i].index;
        bott.appendChild(triTochki);
        

        menuVipad = document.createElement('div');
        menuVipad.classList.add('menu-vipad');
        menu.appendChild(menuVipad)

        let arrowUp = document.createElement('div')
        arrowUp.classList.add('arrow-up');
        menuVipad.appendChild(arrowUp);

        done = document.createElement('div');
        done.classList.add('done');
        done.dataset.index = arr[i].index;
        menuVipad.appendChild(done);
        done.innerText = 'done'

        edit = document.createElement('div')
        edit.dataset.index = arr[i].index;
        edit.classList.add('edit');
        menuVipad.appendChild(edit);
        edit.innerText = 'edit'

        del = document.createElement('div')
        del.dataset.index = arr[i].index;
        del.classList.add('del');
        menuVipad.appendChild(del);
        del.innerText = 'delete'

    bott.appendChild(menu);
    s.appendChild(taske);
    }
    tasks.appendChild(s);
    instruments()
}


function clearData(){
    tittle.value = '';
    desc.value = '';
    prior.value = 'easy';
}
