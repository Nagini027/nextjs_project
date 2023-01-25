const DUMMY_EVENTS = [
    {
      id: 'e1',
      title: 'South Indian',
      image: 'images/img-01.jpg',
      isFeatured: false,
    },
    {
      id: 'e2',
      title: 'Chineese',
      image: 'images/img-03.jpg',
      isFeatured: true,
    },
    {
      id: 'e3',
      title: 'Fast Food',      
      image: 'images/img-05.jpg',
      isFeatured: true,
    },
    {
      id: 'e4',
      title: 'drinks',      
      image: 'images/img-08.jpg',
      isFeatured: true,
    },
    {
      id: 'e5',
      title: 'Biryani',      
      image: 'images/img-09.jpg',
      isFeatured: true,
    },
    
    
  ];

  export function getFeaturedEvents() {
    return DUMMY_EVENTS.filter((event) => event.isFeatured);
  }
  
  export function getAllEvents() {
    return DUMMY_EVENTS;
  }
  
  export function getFilteredEvents(itemsFilter) {
    const { name, cost } = itemsFilter;
  
    let filteredEvents = DUMMY_EVENTS.filter((event) => {
      const eventDate = new Date(event.date);
      return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
    });
  
    return filteredEvents;
  }
  
  export function getEventById(id) {
    return DUMMY_EVENTS.find((event) => event.id === id);
  }
