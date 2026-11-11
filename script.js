var currentUser = null;

const patientTypes = ['Кошка', 'Собака', 'Птица', 'Другое'];
const serviceCategories = ['Осмотры', 'Вакцинация', 'Операции', 'Процедуры'];
const doctorList = ['Петров П.П.', 'Смирнова А.А.', 'Козлова Е.В.'];

const initialPatients = [
    { id: '1', description: 'Ласковый кот, любит рыбу', createdAt: new Date('2024-01-15'), author: 'Регистратор', name: 'Барсик', type: 'Кошка', breed: 'Британская', birthDate: '2020-03-15', owner: 'Иванов И.И.', phone: '+79001111111' },
    { id: '2', description: 'Активная собака, нужна дрессировка', createdAt: new Date('2024-01-20'), author: 'Регистратор', name: 'Шарик', type: 'Собака', breed: 'Лабрадор', birthDate: '2019-07-10', owner: 'Петров П.П.', phone: '+79002222222' },
    { id: '3', description: 'Говорящий попугай', createdAt: new Date('2024-02-01'), author: 'Регистратор', name: 'Кеша', type: 'Птица', breed: 'Волнистый попугай', birthDate: '2021-12-05', owner: 'Сидоров С.С.', phone: '+79003333333' },
    { id: '4', description: 'Спокойный кот, кастрирован', createdAt: new Date('2024-02-10'), author: 'Регистратор', name: 'Мурзик', type: 'Кошка', breed: 'Сиамская', birthDate: '2018-05-20', owner: 'Кузнецова А.А.', phone: '+79004444444' },
    { id: '5', description: 'Щенок, нужна вакцинация', createdAt: new Date('2024-02-15'), author: 'Регистратор', name: 'Бобик', type: 'Собака', breed: 'Такса', birthDate: '2023-11-01', owner: 'Смирнов В.В.', phone: '+79005555555' },
    { id: '6', description: 'Старый кот, проблемы с почками', createdAt: new Date('2024-03-01'), author: 'Регистратор', name: 'Васька', type: 'Кошка', breed: 'Дворовая', birthDate: '2015-08-12', owner: 'Попова Е.Е.', phone: '+79006666666' },
    { id: '7', description: 'Овчарка, служебная собака', createdAt: new Date('2024-03-10'), author: 'Регистратор', name: 'Рекс', type: 'Собака', breed: 'Немецкая овчарка', birthDate: '2020-01-25', owner: 'Волков Д.Д.', phone: '+79007777777' },
    { id: '8', description: 'Канарейка, хорошо поёт', createdAt: new Date('2024-03-15'), author: 'Регистратор', name: 'Чижик', type: 'Птица', breed: 'Канарейка', birthDate: '2022-06-30', owner: 'Зайцева М.М.', phone: '+79008888888' },
    { id: '9', description: 'Персидский кот, длинная шерсть', createdAt: new Date('2024-04-01'), author: 'Регистратор', name: 'Персик', type: 'Кошка', breed: 'Персидская', birthDate: '2021-02-14', owner: 'Новиков Н.Н.', phone: '+79009999999' },
    { id: '10', description: 'Хаски, очень активный', createdAt: new Date('2024-04-10'), author: 'Регистратор', name: 'Альфа', type: 'Собака', breed: 'Хаски', birthDate: '2022-09-05', owner: 'Морозов К.К.', phone: '+79001010101' },
    { id: '11', description: 'Котёнок, игривый', createdAt: new Date('2024-05-01'), author: 'Регистратор', name: 'Снежок', type: 'Кошка', breed: 'Ангорская', birthDate: '2024-01-10', owner: 'Волкова О.О.', phone: '+79001212121' },
    { id: '12', description: 'Корги, короткие лапки', createdAt: new Date('2024-05-15'), author: 'Регистратор', name: 'Коржик', type: 'Собака', breed: 'Корги', birthDate: '2023-04-20', owner: 'Соловьев А.А.', phone: '+79001313131' },
    { id: '13', description: 'Ара, яркий попугай', createdAt: new Date('2024-06-01'), author: 'Регистратор', name: 'Гоша', type: 'Птица', breed: 'Ара', birthDate: '2020-11-11', owner: 'Лебедев И.И.', phone: '+79001414141' },
    { id: '14', description: 'Мейн-кун, большой кот', createdAt: new Date('2024-06-15'), author: 'Регистратор', name: 'Тимоша', type: 'Кошка', breed: 'Мейн-кун', birthDate: '2019-12-25', owner: 'Козлов П.П.', phone: '+79001515151' },
    { id: '15', description: 'Бульдог, храпит во сне', createdAt: new Date('2024-07-01'), author: 'Регистратор', name: 'Борис', type: 'Собака', breed: 'Французский бульдог', birthDate: '2021-07-07', owner: 'Новикова С.С.', phone: '+79001616161' },
    { id: '16', description: 'Шиншилла, пушистая', createdAt: new Date('2024-07-15'), author: 'Регистратор', name: 'Пушок', type: 'Другое', breed: 'Шиншилла', birthDate: '2022-03-03', owner: 'Морозова Т.Т.', phone: '+79001717171' },
    { id: '17', description: 'Сфинкс, без шерсти', createdAt: new Date('2024-08-01'), author: 'Регистратор', name: 'Лысик', type: 'Кошка', breed: 'Сфинкс', birthDate: '2020-10-10', owner: 'Васильев Р.Р.', phone: '+79001818181' },
    { id: '18', description: 'Кокер-спаниель', createdAt: new Date('2024-08-15'), author: 'Регистратор', name: 'Джесси', type: 'Собака', breed: 'Кокер-спаниель', birthDate: '2022-05-15', owner: 'Павлова Л.Л.', phone: '+79001919191' },
    { id: '19', description: 'Нимфа, спокойная птица', createdAt: new Date('2024-09-01'), author: 'Регистратор', name: 'Ричи', type: 'Птица', breed: 'Корелла', birthDate: '2023-02-20', owner: 'Семенов В.В.', phone: '+79002020202' },
    { id: '20', description: 'Бенгальский кот, пятнистый', createdAt: new Date('2024-09-15'), author: 'Регистратор', name: 'Леопард', type: 'Кошка', breed: 'Бенгальская', birthDate: '2021-08-08', owner: 'Голубев А.А.', phone: '+79002121212' },
    { id: '21', description: 'Йоркширский терьер', createdAt: new Date('2024-10-01'), author: 'Регистратор', name: 'Йорк', type: 'Собака', breed: 'Йоркширский терьер', birthDate: '2023-06-18', owner: 'Виноградова М.М.', phone: '+79002222323' }
];

const initialAppointments = [
    { id: 'a1', description: 'Плановый осмотр', createdAt: new Date('2026-11-01'), author: 'Регистратор', patientId: '1', patientName: 'Барсик', owner: 'Иванов И.И.', doctor: 'Петров П.П.', date: '2026-11-15', time: '10:00', service: 'Осмотр', status: 'Запланирован' },
    { id: 'a2', description: 'Комплексная вакцинация', createdAt: new Date('2026-11-01'), author: 'Регистратор', patientId: '2', patientName: 'Шарик', owner: 'Петров П.П.', doctor: 'Смирнова А.А.', date: '2026-11-15', time: '11:30', service: 'Вакцинация', status: 'Запланирован' },
    { id: 'a3', description: 'Осмотр клюва', createdAt: new Date('2026-11-02'), author: 'Регистратор', patientId: '3', patientName: 'Кеша', owner: 'Сидоров С.С.', doctor: 'Петров П.П.', date: '2026-11-16', time: '09:00', service: 'Осмотр', status: 'Запланирован' },
    { id: 'a4', description: 'Стрижка когтей', createdAt: new Date('2026-11-02'), author: 'Регистратор', patientId: '4', patientName: 'Мурзик', owner: 'Кузнецова А.А.', doctor: 'Козлова Е.В.', date: '2026-11-16', time: '14:00', service: 'Процедуры', status: 'Запланирован' },
    { id: 'a5', description: 'Первая вакцинация щенка', createdAt: new Date('2026-11-03'), author: 'Регистратор', patientId: '5', patientName: 'Бобик', owner: 'Смирнов В.В.', doctor: 'Смирнова А.А.', date: '2026-11-17', time: '10:30', service: 'Вакцинация', status: 'Запланирован' },
    { id: 'a6', description: 'Осмотр после тренировки', createdAt: new Date('2026-11-03'), author: 'Регистратор', patientId: '7', patientName: 'Рекс', owner: 'Волков Д.Д.', doctor: 'Петров П.П.', date: '2026-11-17', time: '15:00', service: 'Осмотр', status: 'Завершен' },
    { id: 'a7', description: 'Чистка зубов', createdAt: new Date('2026-11-04'), author: 'Регистратор', patientId: '10', patientName: 'Альфа', owner: 'Морозов К.К.', doctor: 'Козлова Е.В.', date: '2026-11-18', time: '11:00', service: 'Процедуры', status: 'Запланирован' },
    { id: 'a8', description: 'Ежегодный осмотр', createdAt: new Date('2026-11-04'), author: 'Регистратор', patientId: '14', patientName: 'Тимоша', owner: 'Козлов П.П.', doctor: 'Смирнова А.А.', date: '2026-11-18', time: '16:00', service: 'Осмотр', status: 'Запланирован' }
];

const initialServices = [
    { id: 's1', description: 'Первичный осмотр животного', createdAt: new Date('2024-01-01'), author: 'Администратор', name: 'Первичный осмотр', category: 'Осмотры', price: 1500, duration: 30 },
    { id: 's2', description: 'Повторный осмотр после лечения', createdAt: new Date('2024-01-01'), author: 'Администратор', name: 'Повторный осмотр', category: 'Осмотры', price: 1000, duration: 20 },
    { id: 's3', description: 'Комплексная вакцинация', createdAt: new Date('2024-01-01'), author: 'Администратор', name: 'Вакцинация комплексная', category: 'Вакцинация', price: 2500, duration: 20 },
    { id: 's4', description: 'Вакцинация от бешенства', createdAt: new Date('2024-01-01'), author: 'Администратор', name: 'Вакцинация от бешенства', category: 'Вакцинация', price: 1200, duration: 15 },
    { id: 's5', description: 'Кастрация кота', createdAt: new Date('2024-01-01'), author: 'Администратор', name: 'Кастрация кота', category: 'Операции', price: 3500, duration: 60 },
    { id: 's6', description: 'Стерилизация кошки', createdAt: new Date('2024-01-01'), author: 'Администратор', name: 'Стерилизация кошки', category: 'Операции', price: 4500, duration: 90 },
    { id: 's7', description: 'Удаление зуба', createdAt: new Date('2024-01-01'), author: 'Администратор', name: 'Удаление зуба', category: 'Операции', price: 2000, duration: 45 },
    { id: 's8', description: 'Стрижка когтей', createdAt: new Date('2024-01-01'), author: 'Администратор', name: 'Стрижка когтей', category: 'Процедуры', price: 500, duration: 15 },
    { id: 's9', description: 'Чистка зубов ультразвуком', createdAt: new Date('2024-01-01'), author: 'Администратор', name: 'Чистка зубов', category: 'Процедуры', price: 1800, duration: 40 },
    { id: 's10', description: 'Груминг (стрижка шерсти)', createdAt: new Date('2024-01-01'), author: 'Администратор', name: 'Груминг', category: 'Процедуры', price: 2500, duration: 90 }
];

const initialUsers = [
    { id: 'u1', description: 'Администратор системы', createdAt: new Date('2024-01-01'), author: 'Система', fio: 'Администратор', login: 'admin', password: 'admin123', role: 'Администратор', status: 'Активен' },
    { id: 'u2', description: 'Регистратор клиники', createdAt: new Date('2024-01-01'), author: 'Система', fio: 'Смирнова Анна', login: 'smirnova', password: 'smirnova123', role: 'Регистратор', status: 'Активен' },
    { id: 'u3', description: 'Ветеринар-терапевт', createdAt: new Date('2024-01-01'), author: 'Система', fio: 'Петров Петр', login: 'petrov', password: 'petrov123', role: 'Ветеринар', status: 'Активен' },
    { id: 'u4', description: 'Ветеринар-хирург', createdAt: new Date('2024-01-01'), author: 'Система', fio: 'Смирнова А.А.', login: 'smirnova_aa', password: 'doctor123', role: 'Ветеринар', status: 'Активен' },
    { id: 'u5', description: 'Ветеринар', createdAt: new Date('2024-01-01'), author: 'Система', fio: 'Козлова Е.В.', login: 'kozlova', password: 'kozlova123', role: 'Ветеринар', status: 'Активен' },
    { id: 'u6', description: 'Клиент клиники', createdAt: new Date('2024-02-01'), author: 'Регистратор', fio: 'Иванов И.И.', login: 'ivanov', password: 'ivanov123', role: 'Клиент', status: 'Активен' },
    { id: 'u7', description: 'Клиент клиники', createdAt: new Date('2024-02-05'), author: 'Регистратор', fio: 'Петров П.П.', login: 'petrov_pp', password: 'petrov123', role: 'Клиент', status: 'Активен' },
    { id: 'u8', description: 'Клиент клиники', createdAt: new Date('2024-02-10'), author: 'Регистратор', fio: 'Сидоров С.С.', login: 'sidorov', password: 'sidorov123', role: 'Клиент', status: 'Активен' }
];

class PatientCollection {
    constructor(objs = []) {
        this._objs = [];
        this._currentFilter = {};
        this._currentSort = 'createdAt';
        this._currentPage = 0;
        this._pageSize = 5;
        this.addAll(objs);
    }

    _validateObj(obj) {
        if (!obj || typeof obj !== 'object') return false;
        if (!obj.id || typeof obj.id !== 'string') return false;
        if (!obj.description || typeof obj.description !== 'string' || obj.description.length >= 200) return false;
        if (!obj.createdAt || !(obj.createdAt instanceof Date)) return false;
        if (!obj.author || typeof obj.author !== 'string' || obj.author.trim() === '') return false;
        return true;
    }

    _applyFilters(arr, filterConfig) {
        if (!filterConfig) return arr;
        return arr.filter(obj => {
            for (let key in filterConfig) {
                if (filterConfig[key] && filterConfig[key] !== '') {
                    const value = String(obj[key] || '').toLowerCase();
                    const filter = String(filterConfig[key]).toLowerCase();
                    if (!value.includes(filter)) return false;
                }
            }
            return true;
        });
    }

    _sortByField(arr, field) {
        return arr.sort((a, b) => {
            const valA = String(a[field] || '').toLowerCase();
            const valB = String(b[field] || '').toLowerCase();
            return valA.localeCompare(valB);
        });
    }

    getObjs(skip = 0, top = 10, filterConfig = {}) {
        let result = [...this._objs];
        result = this._applyFilters(result, filterConfig);
        result = this._sortByField(result, this._currentSort);
        return result.slice(skip, skip + top);
    }

    getObj(id) {
        return this._objs.find(obj => obj.id === id) || null;
    }

    validateObj(obj) {
        return this._validateObj(obj);
    }

    addObj(obj) {
        if (!this._validateObj(obj)) return false;
        if (this._objs.some(o => o.id === obj.id)) return false;
        this._objs.push(obj);
        return true;
    }

    editObj(id, obj) {
        const index = this._objs.findIndex(o => o.id === id);
        if (index === -1) return false;
        const updated = { ...this._objs[index], ...obj };
        updated.id = this._objs[index].id;
        updated.author = this._objs[index].author;
        updated.createdAt = this._objs[index].createdAt;
        if (!this._validateObj(updated)) return false;
        this._objs[index] = updated;
        return true;
    }

    removeObj(id) {
        const index = this._objs.findIndex(o => o.id === id);
        if (index === -1) return false;
        this._objs.splice(index, 1);
        return true;
    }

    addAll(objs) {
        if (!Array.isArray(objs)) return [];
        const added = [];
        objs.forEach(obj => {
            if (this.addObj(obj)) added.push(obj);
        });
        return added;
    }

    clear() {
        this._objs = [];
    }

    getTotalCount(filterConfig = {}) {
        return this._applyFilters([...this._objs], filterConfig).length;
    }

    setSort(field) {
        this._currentSort = field;
    }

    setFilter(filterConfig) {
        this._currentFilter = filterConfig;
    }
}

class PatientView {
    constructor(model) {
        this._model = model;
        this._listContainer = document.getElementById('patients-list');
        this._countElement = document.getElementById('patients-count');
        this._paginationContainer = document.getElementById('pagination');
        this._userInfoElement = document.getElementById('user-info');
    }

    _formatDate(date) {
        if (!date) return '';
        const d = new Date(date);
        return d.toLocaleDateString('ru-RU');
    }

    _createPatientCard(obj) {
        const article = document.createElement('article');
        article.className = 'list-item';
        article.dataset.id = obj.id;
        const isAdmin = currentUser !== null;
        const adminButtons = isAdmin ? `
            <button type="button" class="btn btn-small" onclick="window.showEditForm('${obj.id}')">Редактировать</button>
            <button type="button" class="btn btn-danger btn-small" onclick="window.removePatient('${obj.id}')">Удалить</button>
        ` : '';
        article.innerHTML = `
            <div class="item-info">
                <h4>${obj.name}</h4>
                <p>Вид: ${obj.type} | Порода: ${obj.breed || 'не указана'} | Дата рождения: ${this._formatDate(obj.birthDate)}</p>
                <p>Владелец: ${obj.owner} | Телефон: ${obj.phone}</p>
                <p><em>${obj.description}</em></p>
                <p style="font-size:0.85em;color:#555;">Добавлен: ${this._formatDate(obj.createdAt)} | Автор: ${obj.author}</p>
            </div>
            <div class="item-actions">${adminButtons}</div>
        `;
        return article;
    }

    renderList() {
        this._listContainer.innerHTML = '';
        const skip = this._model._currentPage * this._model._pageSize;
        const objs = this._model.getObjs(skip, this._model._pageSize, this._model._currentFilter);
        objs.forEach(obj => {
            this._listContainer.appendChild(this._createPatientCard(obj));
        });
        this._updateCount();
        this._renderPagination();
    }

    _updateCount() {
        const total = this._model.getTotalCount(this._model._currentFilter);
        this._countElement.textContent = `Всего пациентов: ${total}`;
    }

    _renderPagination() {
        this._paginationContainer.innerHTML = '';
        const total = this._model.getTotalCount(this._model._currentFilter);
        const totalPages = Math.ceil(total / this._model._pageSize);
        if (totalPages <= 1) return;
        const prevBtn = document.createElement('button');
        prevBtn.className = 'btn btn-small';
        prevBtn.textContent = '← Назад';
        prevBtn.disabled = this._model._currentPage === 0;
        prevBtn.onclick = () => { this._model._currentPage--; this.renderList(); };
        const info = document.createElement('span');
        info.textContent = `Страница ${this._model._currentPage + 1} из ${totalPages}`;
        const nextBtn = document.createElement('button');
        nextBtn.className = 'btn btn-small';
        nextBtn.textContent = 'Вперед →';
        nextBtn.disabled = this._model._currentPage >= totalPages - 1;
        nextBtn.onclick = () => { this._model._currentPage++; this.renderList(); };
        this._paginationContainer.appendChild(prevBtn);
        this._paginationContainer.appendChild(info);
        this._paginationContainer.appendChild(nextBtn);
    }

    addObjToDOM(obj) {
        this._listContainer.prepend(this._createPatientCard(obj));
        this._updateCount();
    }

    removeObjFromDOM(id) {
        const element = this._listContainer.querySelector(`[data-id="${id}"]`);
        if (element) {
            element.remove();
            this._updateCount();
        }
    }

    editObjInDOM(id, obj) {
        const element = this._listContainer.querySelector(`[data-id="${id}"]`);
        if (element) {
            element.replaceWith(this._createPatientCard(obj));
        }
    }

    renderUser(user) {
        const loginLink = document.getElementById('login-link');
        const logoutLink = document.getElementById('logout-link');
        
        if (user) {
            this._userInfoElement.innerHTML = `<span>👤 ${user}</span>`;
            document.getElementById('admin-controls').style.display = 'block';
            document.getElementById('admin-controls-app').style.display = 'block';
            document.getElementById('admin-controls-serv').style.display = 'block';
            document.getElementById('admin-controls-user').style.display = 'block';
            loginLink.style.display = 'none';
            logoutLink.style.display = 'inline-block';
        } else {
            this._userInfoElement.innerHTML = '<span>👤 Гость</span>';
            document.getElementById('admin-controls').style.display = 'none';
            document.getElementById('admin-controls-app').style.display = 'none';
            document.getElementById('admin-controls-serv').style.display = 'none';
            document.getElementById('admin-controls-user').style.display = 'none';
            loginLink.style.display = 'inline-block';
            logoutLink.style.display = 'none';
        }
    }
}

const patientModel = new PatientCollection(initialPatients);
const patientView = new PatientView(patientModel);
const appointmentModel = new PatientCollection(initialAppointments);
const serviceModel = new PatientCollection(initialServices);
const userModel = new PatientCollection(initialUsers);

function _formatDate(date) {
    if (!date) return '';
    const d = new Date(date);
    return d.toLocaleDateString('ru-RU');
}

function renderAppointments(filterConfig = {}) {
    const container = document.getElementById('appointments-list');
    container.innerHTML = '';
    const objs = appointmentModel.getObjs(0, 100, filterConfig);
    objs.forEach(obj => {
        const article = document.createElement('article');
        article.className = 'list-item';
        article.dataset.id = obj.id;
        const isAdmin = currentUser !== null;
        article.innerHTML = `
            <div class="item-info">
                <h4>${_formatDate(obj.date)}, ${obj.time} - ${obj.patientName} (${obj.owner})</h4>
                <p>Врач: ${obj.doctor} | Услуга: ${obj.service}</p>
                <p>Статус: ${obj.status}</p>
            </div>
            <div class="item-actions">
                ${isAdmin ? `<button type="button" class="btn btn-danger btn-small" onclick="window.removeAppointment('${obj.id}')">Отменить</button>` : ''}
            </div>
        `;
        container.appendChild(article);
    });
    document.getElementById('appointments-count').textContent = `Записей: ${appointmentModel.getTotalCount()}`;
}

function renderServices(filterConfig = {}) {
    const container = document.getElementById('services-list');
    container.innerHTML = '';
    const objs = serviceModel.getObjs(0, 100, filterConfig);
    objs.forEach(obj => {
        const article = document.createElement('article');
        article.className = 'list-item';
        article.dataset.id = obj.id;
        const isAdmin = currentUser !== null;
        article.innerHTML = `
            <div class="item-info">
                <h4>${obj.name}</h4>
                <p>Категория: ${obj.category} | Стоимость: ${obj.price} руб. | Длительность: ${obj.duration} мин</p>
                <p><em>${obj.description}</em></p>
            </div>
            <div class="item-actions">
                ${isAdmin ? `<button type="button" class="btn btn-danger btn-small" onclick="window.removeService('${obj.id}')">Удалить</button>` : ''}
            </div>
        `;
        container.appendChild(article);
    });
    document.getElementById('services-count').textContent = `Услуг: ${serviceModel.getTotalCount()}`;
}

function renderUsers(filterConfig = {}) {
    const container = document.getElementById('users-list');
    container.innerHTML = '';
    const objs = userModel.getObjs(0, 100, filterConfig);
    objs.forEach(obj => {
        const article = document.createElement('article');
        article.className = 'list-item';
        article.dataset.id = obj.id;
        const isAdmin = currentUser !== null;
        const password = obj.password || 'не задан';
        article.innerHTML = `
            <div class="item-info">
                <h4>${obj.fio} (${obj.role})</h4>
                <p>Логин: <strong>${obj.login}</strong> | Статус: ${obj.status}</p>
                <p>Пароль: <span class="password-display" data-password="${password}">••••••••</span>
                   <button type="button" class="btn-toggle-password" onclick="toggleUserPassword(this)">👁</button>
                </p>
            </div>
            <div class="item-actions">
                ${isAdmin ? `<button type="button" class="btn btn-danger btn-small" onclick="window.removeUser('${obj.id}')">Удалить</button>` : ''}
            </div>
        `;
        container.appendChild(article);
    });
}

function fillSelectOptions() {
    const typeSelects = ['filter-type', 'pet-type', 'edit-type'];
    typeSelects.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            const hasAll = id === 'filter-type';
            el.innerHTML = hasAll ? '<option value="">Все виды</option>' : '<option value="">Выберите вид</option>';
            patientTypes.forEach(t => {
                el.innerHTML += `<option value="${t}">${t}</option>`;
            });
        }
    });

    const catSelects = ['filter-service-cat', 'service-category'];
    catSelects.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            const hasAll = id === 'filter-service-cat';
            el.innerHTML = hasAll ? '<option value="">Все категории</option>' : '<option value="">Выберите категорию</option>';
            serviceCategories.forEach(c => {
                el.innerHTML += `<option value="${c}">${c}</option>`;
            });
        }
    });

    const doctorSelects = ['filter-app-doctor', 'app-doctor-new'];
    doctorSelects.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            const hasAll = id === 'filter-app-doctor';
            el.innerHTML = hasAll ? '<option value="">Все врачи</option>' : '<option value="">Выберите врача</option>';
            doctorList.forEach(d => {
                el.innerHTML += `<option value="${d}">${d}</option>`;
            });
        }
    });

    const patientSelect = document.getElementById('app-patient');
    if (patientSelect) {
        patientSelect.innerHTML = '<option value="">Выберите пациента</option>';
        patientModel.getObjs(0, 100).forEach(p => {
            patientSelect.innerHTML += `<option value="${p.id}">${p.name} (${p.owner})</option>`;
        });
    }

    const serviceSelect = document.getElementById('app-service');
    if (serviceSelect) {
        serviceSelect.innerHTML = '<option value="">Выберите услугу</option>';
        serviceModel.getObjs(0, 100).forEach(s => {
            serviceSelect.innerHTML += `<option value="${s.name}">${s.name} (${s.price} руб.)</option>`;
        });
    }
}

function showSection(sectionId) {
    document.querySelectorAll('.page-section').forEach(s => s.classList.remove('active'));
    const target = document.getElementById(sectionId);
    if (target) {
        target.classList.add('active');
        window.scrollTo(0, 0);
    }
}

function handleNavigation() {
    const hash = window.location.hash.slice(1) || 'home';
    showSection(hash);
    document.querySelectorAll('.nav-link[data-section]').forEach(link => {
        link.classList.toggle('active', link.dataset.section === hash);
    });
}

window.addEventListener('hashchange', handleNavigation);

patientView.renderList();
patientView.renderUser(currentUser);
renderAppointments();
renderServices();
renderUsers();
fillSelectOptions();
handleNavigation();

window.togglePassword = function(inputId, button) {
    const input = document.getElementById(inputId);
    if (input.type === 'password') {
        input.type = 'text';
        button.textContent = '🙈';
    } else {
        input.type = 'password';
        button.textContent = '👁';
    }
};

window.toggleUserPassword = function(button) {
    const display = button.previousElementSibling;
    const password = display.dataset.password;
    if (display.textContent === '••••••••') {
        display.textContent = password;
        button.textContent = '🙈';
    } else {
        display.textContent = '••••••••';
        button.textContent = '👁';
    }
};

window.addObj = function(obj) {
    if (!obj.id) obj.id = String(Date.now());
    if (!obj.createdAt) obj.createdAt = new Date();
    if (!obj.author) obj.author = currentUser || 'Аноним';
    const success = patientModel.addObj(obj);
    if (success) {
        patientView.addObjToDOM(obj);
        console.log('✅ Объект добавлен:', obj);
    } else {
        console.log('❌ Ошибка добавления.');
    }
    return success;
};

window.removePatient = function(id) {
    if (confirm('Удалить пациента?')) {
        const success = patientModel.removeObj(id);
        if (success) {
            patientView.removeObjFromDOM(id);
            console.log('✅ Пациент удалён:', id);
        }
    }
};

window.editObj = function(id, obj) {
    const success = patientModel.editObj(id, obj);
    if (success) {
        const updated = patientModel.getObj(id);
        patientView.editObjInDOM(id, updated);
        console.log('✅ Объект обновлён:', id);
    }
    return success;
};

window.getObjs = function(skip = 0, top = 10, filterConfig = {}) {
    const result = patientModel.getObjs(skip, top, filterConfig);
    console.log('📋 Получено объектов:', result.length, result);
    return result;
};

window.getObj = function(id) {
    const result = patientModel.getObj(id);
    console.log('🔍 Объект:', result);
    return result;
};

window.validateObj = function(obj) {
    const result = patientModel.validateObj(obj);
    console.log('✅ Валиден:', result);
    return result;
};

window.clearAll = function() {
    patientModel.clear();
    patientView.renderList();
    console.log('🗑️ Коллекция очищена');
};

window.loadAll = function() {
    patientModel.clear();
    patientModel.addAll(initialPatients);
    patientView.renderList();
    console.log('📥 Данные загружены:', patientModel.getTotalCount());
};

window.showEditForm = function(id) {
    const obj = patientModel.getObj(id);
    if (!obj) return;
    document.getElementById('edit-id').value = id;
    document.getElementById('edit-name').value = obj.name;
    document.getElementById('edit-type').value = obj.type;
    document.getElementById('edit-breed').value = obj.breed || '';
    document.getElementById('edit-birth').value = obj.birthDate || '';
    document.getElementById('edit-owner').value = obj.owner;
    document.getElementById('edit-phone').value = obj.phone;
    document.getElementById('edit-description').value = obj.description;
    window.location.hash = '#edit-patient';
};

window.handleAddForm = function(event) {
    event.preventDefault();
    const obj = {
        id: String(Date.now()),
        description: document.getElementById('pet-description').value,
        createdAt: new Date(),
        author: currentUser || 'Аноним',
        name: document.getElementById('pet-name').value,
        type: document.getElementById('pet-type').value,
        breed: document.getElementById('pet-breed').value,
        birthDate: document.getElementById('pet-birth').value,
        owner: document.getElementById('owner-name').value,
        phone: document.getElementById('owner-phone').value
    };
    if (window.addObj(obj)) {
        alert('Пациент "' + obj.name + '" добавлен!');
        window.location.hash = '#patients';
        document.getElementById('add-patient-form').reset();
    } else {
        alert('Ошибка добавления!');
    }
};

window.handleEditForm = function(event) {
    event.preventDefault();
    const id = document.getElementById('edit-id').value;
    const obj = {
        description: document.getElementById('edit-description').value,
        name: document.getElementById('edit-name').value,
        type: document.getElementById('edit-type').value,
        breed: document.getElementById('edit-breed').value,
        birthDate: document.getElementById('edit-birth').value,
        owner: document.getElementById('edit-owner').value,
        phone: document.getElementById('edit-phone').value
    };
    if (window.editObj(id, obj)) {
        alert('Данные обновлены!');
        window.location.hash = '#patients';
    } else {
        alert('Ошибка редактирования!');
    }
};

window.applyFilters = function() {
    const name = document.getElementById('filter-name').value;
    const type = document.getElementById('filter-type').value;
    const owner = document.getElementById('filter-owner').value;
    patientModel.setFilter({ name, type, owner });
    patientModel._currentPage = 0;
    patientView.renderList();
};

window.resetFilters = function() {
    document.getElementById('filter-name').value = '';
    document.getElementById('filter-type').value = '';
    document.getElementById('filter-owner').value = '';
    patientModel.setFilter({});
    patientModel._currentPage = 0;
    patientView.renderList();
};

window.sortBy = function(field) {
    patientModel.setSort(field);
    patientView.renderList();
};

window.applyAppointmentFilters = function() {
    const date = document.getElementById('filter-app-date').value;
    const doctor = document.getElementById('filter-app-doctor').value;
    renderAppointments({ date, doctor });
};

window.resetAppointmentFilters = function() {
    document.getElementById('filter-app-date').value = '';
    document.getElementById('filter-app-doctor').value = '';
    renderAppointments();
};

window.removeAppointment = function(id) {
    if (confirm('Отменить запись?')) {
        appointmentModel.removeObj(id);
        renderAppointments();
    }
};

window.handleAddAppointment = function(event) {
    event.preventDefault();
    const patientId = document.getElementById('app-patient').value;
    const patient = patientModel.getObj(patientId);
    const obj = {
        id: 'a' + Date.now(),
        description: 'Запись на ' + document.getElementById('app-service').value,
        createdAt: new Date(),
        author: currentUser || 'Аноним',
        patientId: patientId,
        patientName: patient ? patient.name : 'Неизвестно',
        owner: patient ? patient.owner : '',
        doctor: document.getElementById('app-doctor-new').value,
        date: document.getElementById('app-date-new').value,
        time: document.getElementById('app-time').value,
        service: document.getElementById('app-service').value,
        status: 'Запланирован'
    };
    appointmentModel.addObj(obj);
    renderAppointments();
    alert('Запись создана!');
    window.location.hash = '#appointments';
    document.getElementById('add-appointment-form').reset();
};

window.applyServiceFilters = function() {
    const name = document.getElementById('filter-service-name').value;
    const category = document.getElementById('filter-service-cat').value;
    renderServices({ name, category });
};

window.resetServiceFilters = function() {
    document.getElementById('filter-service-name').value = '';
    document.getElementById('filter-service-cat').value = '';
    renderServices();
};

window.removeService = function(id) {
    if (confirm('Удалить услугу?')) {
        serviceModel.removeObj(id);
        renderServices();
    }
};

window.handleAddService = function(event) {
    event.preventDefault();
    const obj = {
        id: 's' + Date.now(),
        description: document.getElementById('service-description').value,
        createdAt: new Date(),
        author: currentUser || 'Аноним',
        name: document.getElementById('service-name').value,
        category: document.getElementById('service-category').value,
        price: parseInt(document.getElementById('service-price').value),
        duration: parseInt(document.getElementById('service-duration').value)
    };
    serviceModel.addObj(obj);
    renderServices();
    alert('Услуга добавлена!');
    window.location.hash = '#services';
    document.getElementById('add-service-form').reset();
};

window.applyUserFilters = function() {
    const search = document.getElementById('filter-user').value;
    renderUsers({ fio: search, login: search });
};

window.resetUserFilters = function() {
    document.getElementById('filter-user').value = '';
    renderUsers();
};

window.removeUser = function(id) {
    if (confirm('Удалить пользователя?')) {
        userModel.removeObj(id);
        renderUsers();
    }
};

window.handleAddUser = function(event) {
    event.preventDefault();
    const obj = {
        id: 'u' + Date.now(),
        description: 'Пользователь системы',
        createdAt: new Date(),
        author: currentUser || 'Аноним',
        fio: document.getElementById('user-fio').value,
        login: document.getElementById('user-login').value,
        password: document.getElementById('user-password').value,
        role: document.getElementById('user-role').value,
        status: 'Активен'
    };
    userModel.addObj(obj);
    renderUsers();
    alert('Пользователь "' + obj.fio + '" добавлен! Логин: ' + obj.login + ', Пароль: ' + obj.password);
    window.location.hash = '#admin';
    document.getElementById('add-user-form').reset();
};

window.handleLogin = function(event) {
    event.preventDefault();
    const login = document.getElementById('login-username').value.trim();
    const password = document.getElementById('login-password').value;
    
    const allUsers = userModel.getObjs(0, 1000);
    const user = allUsers.find(u => u.login === login && u.password === password);
    
    if (user) {
        currentUser = user.fio;
        alert('✅ Вход выполнен: ' + currentUser + ' (роль: ' + user.role + ')');
        patientView.renderUser(currentUser);
        patientView.renderList();
        renderAppointments();
        renderServices();
        renderUsers();
        document.getElementById('login-username').value = '';
        document.getElementById('login-password').value = '';
        window.location.hash = '#home';
    } else {
        alert('❌ Неверный логин или пароль!\n\nТестовые аккаунты:\n• admin / admin123\n• ivanov / ivanov123\n• petrov / petrov123');
    }
};

window.handleLogout = function() {
    const previousUser = currentUser;
    currentUser = null;
    patientView.renderUser(currentUser);
    patientView.renderList();
    renderAppointments();
    renderServices();
    renderUsers();
    alert('👋 Выход выполнен: ' + previousUser);
    window.location.hash = '#home';
};