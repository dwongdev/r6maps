'use strict';

var R6MapsLangTermsRussian = (function(R6MapsLangTerms, undefined) {
  var name = 'ru',
    terms = {
      general: {
        pageTitle: 'R6 Siege Maps - {mapName}',
        pageTitleSelectMap: 'R6 Siege Maps - Выберите карту',
        pageTitleStart: 'R6 Siege Maps',
        cameraViewCaption: '{floorName} (вид с камеры)',
        shortcutTip: 'Горячая клавиша: {shortcut}',
        menu: 'Меню',
        about: 'О сайте',
        languageHeader: 'Язык',
        optionsHeader: 'Настройки',
        labelLosOpacity: 'Прозрачность угла зрения камер',
        linkAbout: 'about.html',
        labelPercent: '{int}%', // according to: (0.12).toLocaleString('en', { style: 'percent' });
        labelLosDefault: '(по умолчанию)',
        labelLos105: '(Эээ?)',
        labelLos110: '(Да ладно!)',
        labelRoomLabelStyle: 'Шрифт названий комнат',
        labelNumberFloorsToDisplay: 'Отображаемое число этажей',
        lockPanning: 'Перемещать одновременно',
        lockZooming: 'Заблокировать зум',
        fullScreen: 'Полный экран',
        enableScreenshots: 'Разрешить скриншоты',
        contributions: 'взносы',
        supportSiteNote: 'Один из способов рассмотреть показывая вашу поддержку через небольшое пожертвование.',
        donateImg: 'https://www.paypalobjects.com/ru_RU/i/btn/btn_donate_LG.gif'
      },
      roomLabelStyles: {
        Dark: 'Жирный',
        Light: 'Тонкий (по умолчанию)',
        DarkAndLarge: 'Большой и жирный',
        LightAndLarge: 'Большой и тонкий',
        DisplayNone: 'Выключить'
      },
      floorDisplayOptions: {
        one: 'По одному',
        two: 'По два (рядом)',
        four: 'По четыре (сетка)'
      },
      selectMaps: {
        selectAMap: 'Выберите карту',
        homeLink: 'Выберите карту'
      },
      compass: {
        letterN: 'С',
        letterE: 'В',
        letterS: 'Ю',
        letterW: 'З'
      },
      floorNames: {
        basement: { full: 'Подвал', short: 'П' },
        firstFloor: { full: '1 этаж', short: '1' },
        secondFloor: { full: '2 этаж', short: '2' },
        thirdFloor: { full: '3 этаж', short: '3' },
        fourthFloor: { full: '4 этаж', short: '4' },
        roof: { full: 'Крыша', short: 'К' }
      },
      objectives: {
        bombShortA: 'A',
        bombShortB: 'B',
        bomb: 'Бомбы',
        hostageShort: 'З',
        hostage: 'Заложник',
        secureShort: 'К',
        secure: 'Контейнер',
        showAll: 'Показать все'
      },
      legend: {
        breakableWalls: 'Разрушаемые стены',
        breakableFloorTraps: 'Разрушаемые люки',
        ceilingHatches: 'Потолочные люки',
        lineOfSightWalls: 'Простреливаемые стены',
        lineOfSightFloors: 'Простреливаемый пол',
        droneTunnels: 'Проезд для дронов',
        objectives: 'Задания',
        insertionPoints: 'Точки входа',
        securityCameras: 'Камеры наблюдения',
        skylights: 'Застеклённая крыша',
        onFloorAboveOrBelow: 'На этаж выше/ниже',
        cameraLineOfSight: 'Поле зрения камеры'
      },
      spawnPoints: {
        a: 'A',
        b: 'B',
        c: 'C',
        d: 'D',
        e: 'E'
      },
      mapNames: {
        bank: 'Банк',
        bartlett: 'Ун. Бартлет',
        border: 'Граница',
        chalet: 'Шале',
        club: 'Клуб',
        consulate: 'Консульство',
        favelas: 'Фавелы',
        hereford: 'База Херефорд',
        house: 'Дом',
        kanal: 'Канал',
        kafe: 'Кафе "Достоевский"',
        oregon: 'Орегон',
        plane: 'Борт номер один',
        skyscraper: 'Небоскрёб',
        yacht: 'Яхта'
      },
      mapRooms: {
        bank: {
          spawnBoulevard: 'Парковка<br/>(перед.ч.)',
          spawnBackAlley: 'Проход к переулку',
          printerRoom: 'Оргтехника',
          parkingLot: 'Парковка<br/>(перед. ч.)',
          boulevard: 'Снаружи',
          jewelryFront: 'Ювелирный<br/>(фасад)',
          plaza: 'Открытая площадка',
          mainEntrance: 'Главный вход',
          garageRamp: 'Гараж<br/>Проезд',
          exteriorParking: 'Парковка',
          garageRoof: 'Крыша<br/>гаража',
          alleyAccess: 'Проход к<br/>переулку',
          backAlleyRooftop: 'Переулок<br/>Крыша',
          backAlley: 'Переулок',
          highRoof: 'Верхняя крыша',
          lowRoof: 'Нижняя крыша',
          vault: 'Хранилище',
          goldVault: 'Золотохранилище',
          serverRoomStairs: 'Серверная<br/>Лестница',
          serverRoom: 'Серверная',
          CCTVRoom: 'Центр<br/>наблюдения',
          loadingDock: 'Зона погрузки',
          secureHallway: 'Безопасный<br/>коридор',
          sewer: 'Туннель',
          lockers: 'Раздевалка',
          vaultLobby: 'Хранилище<br/>Холл',
          vaultEntrance: 'Хранилище<br/>Вход',
          mainStairway: 'Главная<br/>лестница',
          bankGarage: 'Гараж',
          elevators: 'Лифты',
          tellersOffice: 'Офис<br/>кассиров',
          archives: 'Архив',
          tellers: 'Касса',
          loanOffice: 'Кредитный отдел',
          officeHallway: 'Коридор',
          skylightStairwell: 'Лестница',
          lobby: 'Холл',
          openArea: 'Открытая зона',
          staffRoom: 'Служебная<br/>комната',
          electricalRoom: 'Щитовая',
          adminOffice: 'Администрация',
          ATMs: 'Банкоматы',
          executiveHallway: 'Коридор',
          frontDesk: 'Приёмная',
          executiveLounge: 'Администрация<br/>Зал',
          CEOOffice: 'Кабинет<br/>директора',
          janitorCloset: 'Чулан',
          hallway: 'Коридор',
          terrace: 'Терраса',
          stockTradingRoom: 'Торговая<br/>площадка',
          conferenceRoom: 'Переговорная'
        },
        bartlett: {
          archwayHall: 'Зал с арками',
          backAlley: 'Переулок',
          bathroom: 'Сан-<br/>узел',
          campusField: 'Парк на<br/>кампусе',
          classroom: 'Аудитория',
          coatRoom: 'Гарде-<br/>роб',
          compassHallway: 'Коридор',
          courtyard: 'Внутренний двор',
          centralHallway: 'Главный<br/>вестибюль',
          diningRoom: 'Столовая',
          eastCorridor: 'Восточный<br/>коридор',
          eastStairs: 'Восточная<br/>лестница',
          festival: 'Ярмарка',
          frontEntrance: 'Главный вход',
          frontOffice: 'Канцелярия',
          frontPatio: 'Патио',
          gardenPass: 'Садовая<br/>дорожка',
          kitchen: 'Кухня',
          lobby: 'Холл',
          lounge: 'Зал',
          lowerLibrary: 'Нижняя<br/>библиотека',
          mainGate: 'Главные<br/>ворота',
          mainOffice: 'Главный офис',
          modelHall: 'Зал с<br/>макетом',
          pantry: 'Комната с<br/>продуктами',
          parking: 'Парковка',
          pianoRoom: 'Музкомната',
          readingRoom: 'Читальный зал',
          roof: 'Крыша',
          rowingMuseum: 'Зал<br/>"гребной спорт"',
          serviceRoom: 'Служебное<br/>помещение',
          terrace: 'Терраса',
          trophyRoom: 'Комната<br/>трофеев',
          upperLibrary: 'Верхняя<br/>библиотека',
          vistaHallway: 'Открытый<br/>коридор',
          westCorridor: 'Западный<br/>коридор'
        },
        border: {
          armoryLockers: 'Оружейная<br/>Шкафчики',
          tellers: 'Касса',
          ventilationRoom: 'Вент.<br/>комната',
          exitHallway: 'Выход<br/>Коридор',
          supplyCorridor: 'Снабжение<br/>Коридор',
          detention: 'Комната с<br/>контрабандой',
          customsInspection: 'Таможенный контроль',
          customsDesk: 'Таможенный<br/>пост',
          centralStairs: 'Главная лестница',
          serverRoom: 'Серверная',
          supplyRoom: 'Кладовка',
          workshop: 'Мастер-<br/>ская',
          mainLobby: 'Главный<br/>холл',
          bathroom: 'Санузел',
          waitingRoom: 'Зал<br/>ожидания',
          eastStairs: 'Восточная<br/>лестница',
          passportCheck: 'Паспортный<br/>контроль',
          archives: 'Архив',
          offices: 'Офисы',
          officesHallway: 'Офис<br/>Коридор',
          fountain: 'Фонтан',
          mainHallway: 'Главный<br/>коридор',
          armoryDesk: 'Оружейная',
          securityRoom: 'Комната<br/>охраны',
          breakRoom: 'Комната отдыха',
          spawnEastVehicleEntrance: 'Восток: въезд',
          spawnValley: 'Долина',
          spawnWestVehicleExit: 'Запад: выезд',
          westTower: 'Запад<br/>Вышка',
          pedestrianExit: 'Выход<br/>(пешеходы)',
          valley: 'Долина',
          parkingLotEntrance: 'Парковка<br/>Въезд',
          parkingLot: 'Парковка',
          westRoad: 'Запад<br/>Дорога',
          vehicleCustoms: 'Таможня<br/>Транспорт',
          crashScene: 'Авария',
          eastRoad: 'Восток<br/>Дорога',
          pedestrianEntrance: 'Вход<br/>(пешеходы)',
          pedestrianCustoms: 'Таможня<br/>(пешеходы)',
          watchTower: 'Вышка',
          eastAlley: 'Восток<br/>Переулок',
          parkingLotAlley: 'Парковка<br/>Переулок',
          northBalcony: 'Север<br/>Балкон',
          eastBalcony: 'Восток<br/>Балкон',
          westBalcony: 'Запад<br/>Балкон',
          southBalcony: 'Юг<br/>Балкон',
          roof: 'Крыша'
        },
        chalet: {
          spawnFrontYard: 'Двор',
          spawnCampfire: 'Костёр',
          spawnCliffside: 'Утёс',
          spawnLakeside: 'Берег',
          libraryStairs: 'Библиотека<br/>Лестница',
          snowmobileGarageCorridor: 'Доп. гараж – Коридор',
          snowmobileGarage: 'Доп. гараж',
          greatRoomStairs: 'Гостиная<br/>Лестница',
          storageRoom: 'Кладовая',
          wineCellar: 'Винный<br/>погреб',
          wineStock: 'Погреб',
          basementHallway: 'Подвал<br/>Коридор',
          backyardStairs: 'Задний двор<br/>Лестница',
          mainStairs: 'Главная<br/>лестница',
          mainGarage: 'Главный гараж',
          garageEntrance: 'Главный<br/>гараж<br/>Въезд',
          westEntrance: 'Вход<br/>(запад)',
          gamingRoomHallway: 'Игровая комната<br/>Коридор',
          gamingRoom: 'Игровая<br/>комната',
          bar: 'Бар',
          greatRoom: 'Гостиная',
          diningRoom: 'Столовая',
          mainEntrance: 'Главный<br/>вход',
          trophyRoom: 'Комната трофеев',
          kitchenHallway: 'Кухня<br/>Коридор',
          kitchen: 'Кухня',
          libraryHallway: 'Библиотека – Коридор',
          libraryEntrance: 'Библиотека<br/>Вход',
          library: 'Библиотека',
          bedroomTerrace: 'Спальня<br/>Терраса',
          fireplaceHallway: 'Камин<br/>Коридор',
          bedroomHallway: 'Спальня<br/>Коридор',
          masterBathroom: 'Главный<br/>санузел',
          masterBedroom: 'Главная спальня',
          office: 'Офис',
          woodenTrail: 'Дорога в<br/>лесу',
          campfireWood: 'Дрова для<br/>костра',
          backyard: 'Задний двор',
          gazeebo: 'Беседка',
          cliffsideStairs: 'Утёс<br/>Лестница',
          cliffsideWoods: 'Утёс<br/>Лес',
          backyardPatio: 'Задний двор<br/>Патио',
          officeBalcony: 'Балкон<br/>офиса',
          helipadTrail: 'Верт. площадка<br/>Дорожка',
          helipad: 'Вертолётная<br/>площадка',
          frontYardPatio: 'Двор<br/>Патио',
          frontYard: 'Двор',
          bathroomBalcony: 'Санузел<br/>Балкон',
          libraryBalcony: 'Балкон<br/>библиотеки',
          bedroomBalcony: 'Балкон<br/>спальни',
          snowmobiles: 'Снегоходы'
        },
        club: {
          spawnMainEntrance: 'Главные ворота',
          spawnShippingDocks: 'Зона погрузки',
          spawnWarehouse: 'Склад',
          spawnConstructionSite: 'Стройплощадка',
          easternSubroof: 'Козырёк<br/>(восток)',
          constructionSite: 'Стройплощадка',
          container: 'Контейнер',
          graffitiArea: 'Арт-зона',
          recreationArea: 'Зона<br/>отдыха',
          junkyard: 'Свалка',
          VIPParking: 'VIP-парковка',
          mainGate: 'Главные ворота',
          parking: 'Парковка',
          kennels: 'Будки',
          trash: 'Мусорка',
          centralSubroof: 'Козырёк<br/>(центр)',
          easternRoof: 'Крыша (восток)',
          centralRoof: 'Крыша<br/>(центр)',
          westernRoof: 'Крыша (запад)',
          balcony: 'Балкон',
          escapeTunnel: 'Тайный<br/>ход',
          arsenalRoom: 'Оружейная',
          basementHallway: 'Коридор',
          memorialRoom: 'Комната-музей',
          utilityRoom: 'Бытовка',
          oilPit: 'Маслояма',
          centralStairs: 'Главная<br/>лестница',
          church: 'Часовня',
          frontPorch: 'Козырёк (восток)',
          garage: 'Гараж',
          lobby: 'Холл',
          stockRoom: 'Склад',
          garageStorage: 'Гараж<br/>Кладовая',
          lounge: 'Зал',
          bar: 'Бар',
          centralHallway: 'Главный коридор',
          kitchen: 'Кухня',
          kitchenEntrance: 'Вход в<br/>кухню',
          westernHallway: 'Западный<br/>коридор',
          stripClub: 'Стрип-зал',
          junkyardEntrance: 'Свалка<br/>Вход',
          sideEntrance: 'Боковой вход',
          changingRoom: 'Раздевалка',
          bedroom: 'Спальня',
          bathroom: 'Санузел',
          bedroomHallway: 'Спальня – Коридор',
          logisticOffice: 'Офис<br/>логистов',
          gym: 'Спортзал',
          secretStash: 'Тайник',
          CCTVRoom: 'Центр<br/>наблюдения',
          cashRoom: 'Касса',
          easternStairs: 'Восточная<br/>лестница'
        },
        consulate: {
          spawnRiotBarricade: 'Заграждение',
          spawnPoliceLine: 'Полиция',
          spawnGasStation: 'Заправка',
          spawnSideEntrance: 'Боковой вход',
          exitStairs: 'Выход<br/>Лестница',
          garage: 'Гараж',
          basementCorridor: 'Коридор',
          securityRoom: 'Комната охраны',
          cafeteria: 'Кафетерий',
          mainStairs: 'Главная лестница',
          lockerHallway: 'Раздевалка<br/>Коридор',
          serviceStairs: 'Служебная<br/>лестница',
          electricRoom: 'Щитовая',
          storageRoom: 'Кладовая',
          archives: 'Архив',
          archivesCorridor: 'Архив<br/>Коридор',
          pressRoom: 'Пресс-центр',
          westCorridor: 'Коридор (запад)',
          publicBathroom: 'Санузел',
          antechamber: 'Вестибюль',
          lobby: 'Холл',
          eastCorridor: 'Коридор<br/>(восток)',
          tellers: 'Касса',
          visaOffice: 'Отдел виз',
          visaEntrance: 'Вход в<br/>отдел виз',
          frontDoor: 'Главный<br/>вход',
          balcony: 'Балкон',
          copyRoom: 'Копировальная',
          cabinet: 'Кабинет',
          administrationOffice: 'Администрация',
          breakRoom: 'Комната<br/>отдыха',
          frontOffice: 'Общий отдел',
          meetingRoom: 'Переговорка',
          hallway: 'Коридор',
          consulFrontDesk: 'Приёмная<br/>консула',
          privateBathroom: 'Санузел',
          waitingRoom: 'Приёмная',
          consulateOffice: 'Кабинет<br/>консула',
          garageWay: 'Въезд в гараж',
          courtyard: 'Внутренний двор',
          backCourtyard: 'Задний двор',
          sideEntrance: 'Боковой вход',
          dumpster: 'Мусорка',
          parking: 'Парковка',
          gardens: 'Парк',
          fountain: 'Фонтан',
          emergencyExit: 'Запасный<br/>выход',
          garageRoof: 'Крыша<br/>гаража',
          memorialGarden: 'Парк-мемориал',
          policeLine: 'Полиция',
          riotBarracade: 'Заграждение',
          eastFrontYard: 'Двор (восток)',
          westFrontYard: 'Двор (запад)',
          frontAlley: 'Аллея',
          buildingRoof: 'Крыша'
        },
        favelas: {
          packagingRoom: 'Комната для<br/>фасовки',
          footballApartment: 'Квартира<br/>футболиста',
          armoryRoom: 'Оружейная',
          auntsApartment: 'Квартира<br/>тёти',
          auntsBedroom: 'Спальня<br/>тёти',
          growRoom: 'Теплица',
          bikersApartment: 'Квартира<br/>байкера',
          methLab: 'Лаборатория',
          footballBedroom: 'Спальня<br/>футболиста',
          footballOffice: 'Офис<br/>футболиста',
          bikersBedroom: 'Спальня<br/>байкера',
          backStairs: 'Задняя<br/>лестница',
          auntsHall: 'Зал',
          kidsRoom: 'Детская',
          mainStairs: 'Главная<br/>лестница',
          stairHall: 'Лестница<br/>Зал',
          roof: 'Крыша',
          laundryRoom: 'Постирочная',
          vaultRoom: 'Храни-<br/>лище',
          bikersGarage: 'Гараж<br/>байкера',
          backAlley: 'Переулок',
          schoolAlley: 'Школа – Переулок',
          footballPitch: 'Площадка (футбол)',
          market: 'Рынок',
          street: 'Улица',
          rooftops: 'Крыша',
          courtyard: 'Двор',
          accessAlley: 'Проход к переулку',
          shop: 'Магазин<br/>(не отобр.)',
          marketRooftops: 'Рынок – Крыша'
        },
        hereford: {
          spawnTrainingCourse: 'Полоса препятствий',
          spawnBarrak: 'Парковка',
          spawnShootingRange: 'Стрельбище',
          armory: 'Оружейная',
          alleyStairs: 'Бок. лестница<br/>Проход',
          lockers: 'Раздевалка',
          corridor: 'Коридор',
          mainStairs: 'Главная<br/>лестница',
          maintenanceArea: 'Техническая<br/>зона',
          briefingRoom: 'Комната<br/>инструктажа',
          basementEntrance: 'Вход в<br/>подвал',
          garage: 'Гараж',
          TVRoom: 'TV-комната',
          garageCorridor: 'Гараж Коридор',
          kitchen: 'Кухня',
          corridor1: 'Коридор<br/>1',
          diningRoom: 'Столовая',
          pianoLounge: 'Музкомната',
          office: 'Офис',
          masterBedroom: 'Главная спальня',
          backAccess: 'Вход 2',
          laundryRoom: 'Постирочная',
          bathroom: 'Санузел',
          kidsBedroom: 'Детская',
          ballisticMatDepot: 'Склад с баллист.<br/>панелями',
          storage: 'Кладовая',
          storageCorridor: 'Кладовая<br/>Коридор',
          dummyDepot: 'Склад с<br/>манекенами',
          workshop: 'Мастерская',
          shootingRangeEastEntrance: 'Стрельбище<br/>Восток',
          shootingRangeWestEntrance: 'Стрельбище<br/>Запад',
          tireSetting: 'Шины',
          observationRamp: 'Смотровая площадка',
          barracks: 'Бараки',
          busBackAlley: 'Глухой переулок',
          rappelTower: 'Тренировочная<br/>вышка',
          terrace: 'Терраса',
          frontAccess: 'Вход 1',
          chapelGate: 'Вход в часовню',
          forkliftArea: 'Подъёмник',
          sideStairsAlley: 'Бок. лестница<br/>Проход',
          sideStairs: 'Боковая<br/>лестница',
          garageTop: 'Крыша гаража',
          rooftop: 'Крыша'
        },
        house: {
          spawnConstructionSite: 'Стройплощадка',
          spawnRiverDocks: 'Причал',
          spawnAPCArea: 'Парковка БМП',
          spawnSideStreet: 'Боковая улица',
          depot: 'Склад',
          trainingRoom: 'Тренажёрная',
          kitchenStairs: 'Лестница<br/>(кухня)',
          sideStairs: 'Чёрная<br/>лестница',
          laundryRoom: 'Постирочная',
          garage: 'Гараж',
          livingRoom: 'Гостиная',
          backEntrance: 'Чёрный вход',
          lobby: 'Холл',
          kitchen: 'Кухня',
          office: 'Офис',
          diningRoom: 'Столовая',
          workshop: 'Мастерская',
          kidsBedroom: 'Детская',
          upperHallway: 'Коридор',
          lobbyStairs: 'Лестница<br/>(холл)',
          walkIn: 'Гардероб',
          masterBedroom: 'Главная спальня',
          bathroom: 'Санузел',
          sideStreet: 'Боковая<br/>улица',
          garageEntrance: 'Въезд в<br/>гараж',
          garden: 'Сад',
          backAlley: 'Переулок',
          patio: 'Патио',
          jacuzzi: 'Джакузи',
          basementStairs: 'Лестница в<br/>подвал',
          treehouseAlley: 'Дорожка',
          frontYard: 'Передний двор',
          frontStreet: 'Улица',
          frontPorch: 'Крыльцо',
          backPorch: 'Заднее крыльцо',
          backPorchTop: 'Козырёк заднего крыльца',
          frontPorchTop: 'Козырёк крыльца',
          rooftop: 'Крыша'
        },
        kanal: {
          spawnFloatingDock: 'Плавучий док',
          spawnSailboats: 'Яхты',
          spawnConstructionSite: 'Стройплощадка',
          boatGarage: 'Лодочный гараж',
          boatSupplies: 'Склад снабжения',
          pipes: 'Трубы',
          boatSuppliesHallway: 'Склад<br/>снабжения<br/>Коридор',
          lockerRoom: 'Раздевалка',
          coastGuardStairs: 'Берег. охрана<br/>Лестница',
          showers: 'Душевые',
          showersCorridor: 'Душевые<br/>Коридор',
          loadingDock: 'Зона погрузки',
          machineHallway: 'Аппаратная<br/>Коридор',
          controlCenterStairs: 'Диспетческая<br/>Лестница',
          holdingRoom: 'Склад<br/>контрабанды',
          holdingRoomHallway: 'Склад<br/>контраб.<br/>Коридор',
          radio: 'Радиорубка',
          coastGuardOffice: 'Берег. охрана<br/>Офис',
          archives: 'Архив',
          coastGuardHall: 'Берег.<br/>охрана<br/>Коридор',
          mainEntrance: 'Главный<br/>вход',
          lounge: 'Зал',
          bridge: 'Мост',
          modelRoom: 'Комната с<br/>макетом',
          securityRoom: 'Комната<br/>охраны',
          projectorRoom: 'Комната<br/>с экраном',
          mapsOffice: 'Комната<br/>карт',
          mapsOfficeHallway: 'Комната карт<br/>Коридор',
          kitchen: 'Кухня',
          cafeteria: 'Кафетерий',
          plantsHallway: 'Коридор (растения)',
          thirdFloorExit: '3-й этаж<br/>Выход',
          controlRoom: 'Диспетческая',
          electricRoom: 'Щитовая',
          controlRoomHallway: 'Диспетческая – Коридор',
          serverRoom: 'Серверная',
          lockgate: 'Ворота шлюза',
          quayContainers: 'Причал<br/>Контейнеры',
          lockgateTunnel: 'Ворота шлюза<br/>Туннель',
          waterWalkway: 'Мостик',
          quayConstruction: 'Причал<br/>Стройплощадка',
          constructionSite: 'Стройплощадка',
          constructionEntrance: 'Стройплощадка<br/>Вход',
          parkingAlley: 'Проход к<br/>парковке',
          parkingEntrance: 'Въезд на<br/>парковку',
          middleRoad: 'Дорога',
          forkliftAlley: 'Проход<br/>Погрузчик',
          frontLawn: 'Лужайка',
          basementStairs: 'Подвал – Лестница',
          coastGuardRoof: 'Берег. охрана<br/>Крыша',
          bridgeRoof: 'Крыша<br/>моста',
          roofBrickPile: 'Крыша<br/>Кирпичи',
          balcony: 'Балкон',
          controlCenterRoof: 'Диспетческая<br/>Крыша',
          dockStairs: 'Док – Лестница',
          parking: 'Парковка',
          boatCrane: 'Кран'
        },
        kafe: {
          spawnRiverDocks: 'Причал',
          spawnChristmasMarket: 'Рождественская ярмарка',
          spawnPark: 'Аллея',
          laundryRoom: 'Постирочная',
          frontStairs: 'Парадная<br/>лестница',
          bakery: 'Пекарня',
          bakeryKitchen: 'Пекарня,<br/>кухня',
          kitchenPrep: 'Кухня',
          kitchenGrill: 'Гриль',
          kitchenPickUp: 'Выдача',
          coldRoom: 'Холодильник',
          diningRoom: 'Столовая',
          backStairs: 'Чёрная<br/>лестница',
          coldRoomCorridor: 'Холодильник<br/>Коридор',
          VIPSection: 'VIP-зона',
          barStairs: 'Лестница,<br/>бар',
          storage: 'Кладовая',
          museumEntrance: 'Вход в музей',
          miningRoom: 'Зал "Горное дело"',
          trainMuseum: 'Зал "Железные дороги"',
          pillarDiningRoom: 'Парадная столовая',
          mainCorridor: 'Главный<br/>коридор',
          readingRoomCorridor: 'Читальный зал, коридор',
          readingRoom: 'Читальный зал',
          fireplaceHall: 'Зал с камином',
          cigarShop: 'Табачный<br/>магазин',
          cigarLounge: 'Курительная<br/>комната',
          bar: 'Бар',
          barBackstore: 'Подсобка',
          washrooms: 'Уборная',
          washroomCorridor: 'Уборная<br/>Коридор',
          cocktailLounge: 'Кокт.<br/>зал',
          cocktailLoungeEntrance: 'Кокт. зал<br/>Вход',
          westMainStreet: 'Центральная улица, запад',
          mainStreet: 'Центральная улица',
          bakeryParking: 'Парковка у<br/>пекарни',
          bakeryRoof: 'Крыша пекарни',
          cafeRoofTop: 'Крыша кафе',
          terrace: 'Терраса',
          backAlley: 'Переулок',
          garrage: 'Гараж',
          parkAlley: 'Аллея'
        },
        oregon: {
          spawnJunkyard: 'Свалка',
          spawnStreet: 'Улица',
          spawnConstructionSite: 'Стройплощадка',
          towerStairs: 'Вышка<br/>(лестница)',
          boilerRoom: 'Котельная',
          electricRoom: 'Щитовая',
          bunkerEntrance: 'Бункер<br/>(вход)',
          bunker: 'Бункер',
          basementCorridor: 'Подвал<br/>Коридор',
          supplyRoom: 'Кладовка',
          laundryRoom: 'Постирочная',
          laundryStorage: 'Постирочная<br/>Кладовая',
          laundryStairs: 'Постирочная<br/>Лестница',
          office: 'Офис',
          diningHall: 'Столовая',
          diningHallCorridor: 'Столовая – Коридор',
          showers: 'Душевые',
          kitchen: 'Кухня',
          bathroom: 'Санузел',
          dormStairs: 'Спальн. комната<br/>Лестница',
          pantry: 'Комната с<br/>продуктами',
          bathroomCorridor: 'Санузел – Коридор',
          classroom: 'Аудитория',
          lobby: 'Холл',
          mainStairs: 'Главная<br/>лестница',
          meetingHall: 'Конференц-зал',
          rearStage: 'Лестница сзади',
          garage: 'Гараж',
          officeStorage: 'Офис<br/>Кладовая',
          kidsDorm: 'Детская',
          dormMainHall: 'Спальня<br/>Главный зал',
          smallDorms: 'Малая спальня',
          armoryCorridor: 'Оружейная<br/>Коридор',
          masterBedroom: 'Главная<br/>спальня',
          armory: 'Оружейная',
          walkIn: 'Вход',
          attic: 'Чердак',
          watchTower: 'Вышка',
          busYard: 'Двор (автобусы)',
          junkyard: 'Свалка',
          farmlands: 'Зона с/х',
          shootingRange: 'Стрельбище',
          constructionSite: 'Стройплощадка',
          parking: 'Парковка',
          mainEntrance: 'Главный вход',
          street: 'Улица',
          balcony: 'Балкон',
          diningHallRoof: 'Крыша<br/>столовой',
          officeRoof: 'Крыша офиса',
          meetingHallEntrance: 'Конференц-зал<br/>Вход',
          garageRoof: 'Крыша гаража',
          dormsRoof: 'Крыша спальн. комнаты',
          meetingHallRoof: 'Крыша<br/>конференц-зала'
        },
        plane: {
          spawnOfficialEntrance: 'Главный вход',
          spawnReporterEntrance: 'Вход для прессы',
          spawnServiceEntrance: 'Служебный вход',
          pressBathroom: 'Санузел',
          meetingRoom: 'Переговорка',
          frontHallway: 'Передний<br/>коридор',
          executiveOffice: 'Кабинет<br/>президента',
          mainEntrance: 'Главный вход',
          frontStairs: 'Передняя<br/>лестница',
          pantry: 'Комната с<br/>продуктами',
          kitchen: 'Кухня',
          executiveHallway: 'Общий коридор',
          executiveBedroom: 'Спальня<br/>президента',
          changeRoom: 'Раздевалка',
          laund: 'Постир.',
          frontServiceEntrance: 'Служебный вход',
          rightWing: 'Правое крыло',
          backServiceEntrance: 'Доп. служебный<br/>вход',
          reporterEntrance: 'Вход для прессы',
          leftWing: 'Левое крыло',
          staffSection: 'Служебное<br/>помещение',
          securityRoom: 'Комната<br/>охраны',
          pressSectionA: 'Пресс-центр<br/>A',
          pressSectionB: 'Пресс-центр<br/>B',
          backStairs: 'Задняя лестница',
          cargoHold: 'Грузовой отсек',
          serviceCorridor: 'Служебный коридор',
          storage: 'Кладовая',
          luggageHold: 'Багажный отсек',
          firstAidStation: 'Пункт первой помощи',
          cargoFrontEntrance: 'Грузовой отсек<br/>Вход',
          cockpitStairs: 'Кабина Лестница',
          cabinStaff: 'Экипаж',
          radioCabin: 'Радиорубка',
          cabin: 'Кабина',
          caterer: 'Поставки провизии',
          serverRoomA: 'Серверная A',
          serverRoomB: 'Серверная B',
          technicalSeating: 'Место техника'
        },
        skyscraper: {
          helipad: 'Верт. площадка',
          tower: 'Вышка',
          ventilationUnits: 'Вентиляция',
          kitchen: 'Кухня',
          pantry: 'Прод. комната',
          deliveryRoom: 'Комната<br/>доставки',
          houseLobby: 'Дом – Холл',
          houseEntrance: 'Вход',
          mainEntrance: 'Главный<br/>вход',
          reception: 'Приёмная',
          bedroom: 'Спальня',
          closet: 'Кладовка',
          bathroom: 'Санузел',
          houseStairs: 'Дом<br/>Лестница',
          restaurant: 'Ресторан',
          toilet: 'Уборная',
          bbq: 'Барбекю',
          backHallway: 'Коридор',
          mainStairs: 'Главная<br/>лестница',
          geishaRoom: 'Комната<br/>гейши',
          hallway: 'Коридор',
          karaoke: 'Караоке',
          teaRoom: 'Чайная<br/>комната',
          taiko: 'Барабан',
          terrace: 'Терраса',
          backStairs: 'Чёрная<br/>лестница',
          houseBalcony: 'Балкон',
          exhibition: 'Выставка',
          lounge: 'Зал',
          workOffice: 'Офис',
          clearance: 'Офис',
          peacefullTree: 'Дерево',
          contemplationGarden: 'Японский<br/>сад',
          westGarden: 'Сад – Запад',
          bridge: 'Мост',
          gazeebo: 'Беседка',
          restBalcony: 'Балкон<br/>ресторана',
          northGarden: 'Сад – Север',
          eastGarden: 'Сад – Восток',
          sandGarden: 'Сад на<br/>песке',
          sidePath: 'Дорожка',
          sideStairs: 'Боковая<br/>лестница',
          dragonStatue: 'Статуя<br/>дракона',
          coveredWalkway: 'Крытый<br/>проход'
        },
        yacht: {
          spawnSubmarine: 'Подлодка',
          spawnZodiak: 'Шлюпка',
          spawnSnowMobile: 'Аэросани',
          mapsRoom: 'Комната карт',
          cockpit: 'Кабина',
          cockpitHallway: 'Кабина – Коридор',
          captainsOffice: 'Каюта<br/>капитана',
          cockpitBalcony: 'Кабина<br/>Балкон',
          topDeckStairs: 'Верхняя<br/>палуба<br/>Лестница',
          helipadEntrance: 'Верт. площадка<br/>Вход',
          helipad: 'Вертолётная<br/>площадка',
          spaDeck: 'Гидромассажная<br/>ванна',
          eastDeck: 'Палуба (восток)',
          westDeck: 'Палуба (запад)',
          frontDeck: 'Палуба<br/>Передняя<br/>часть',
          masterBedroom: 'Главная<br/>спальня',
          casino: 'Казино',
          pokerRoom: 'Зал для<br/>покера',
          bathroom: 'Сан-<br/>узел',
          bedroomHallway: 'Спальня – Коридор',
          casinoHallway: 'Казино – Коридор',
          globeHallway: 'Глобус<br/>Коридор',
          lounge: 'Зал',
          cafeteria: 'Кафетерий',
          engine: 'Машинное<br/>отделение',
          backEntrance: 'Машин. отдел.<br/>Чёрный вход',
          rearDeck: 'Задняя<br/>часть',
          serverRoom: 'Серверная',
          engineStorage: 'Машин.отдел.<br/>Кладовая',
          engineControl: 'Управление<br/>двигателем',
          backStairs: 'Задняя<br/>лестница',
          emergencyExit: 'Аварийн. выход',
          engineHallway: 'Машин.отдел.<br/>Коридор',
          frontStairs: 'Передняя<br/>лестница',
          kitchen: 'Кухня',
          staffDormitory: 'Экипаж<br/>Комната отдыха',
          westBalcony: 'Балкон (запад)',
          eastBalcony: 'Балкон (восток)',
          kitchenHallway: 'Кухня – Коридор',
          kitchenStairs: 'Кухня – Лестница',
          kitchenPantry: 'Кухня<br/>Комната с прод.',
          infirmary: 'Лазарет',
          borealSubRoom: 'Aklark<br/>Комната с подл.',
          cafeteriaHallway: 'Кафетерий – Коридор',
          engineUtility: 'Машин.<br/>отдел.<br/>Щитки',
          submarine: 'Подлодка',
          westGlacier: 'Запад<br/>Ледник',
          eastHullBreach: 'Восточная часть<br/>Брешь',
          eastGlacier: 'Восток<br/>Ледник',
          frozenRiver: 'Замёрзшая река',
          zodiac: 'Шлюпка',
          westHullBreach: 'Западная часть<br/>Брешь'
        }
      }
    };

  R6MapsLangTerms.registerLanguage(name, terms);

  return  {
    name: name,
    terms: terms
  };
})(R6MapsLangTerms);
