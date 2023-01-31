
export interface BlogPost {
  id: string;
  title: string;
  category: string;
  featuredImage: string;
  url: string;
  content: string; // TODO: Add date
}


export const POSTS_DATA: BlogPost[] = [
  {
    id: '1',
    title: 'Soccer kicks off spring at HIGHLAND Field tonight',
    category: 'Men\'s Soccer',
    featuredImage: '/assets/images/tony-bustamante-o98lg_hUHqY-unsplash.jpeg',
    url: 'https://images.unsplash.com/photo-1516463439953-eb6a1c2867b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, iusto dolore delectus aliquam est illo consectetur iste repellendus dolores nemo odit enim nobis distinctio rerum perferendis nihil labore voluptate modi.',
  },
  {
    id: '2',
    title: 'NIC Women’s Volleyball Defeats UBC',
    category: 'Women\'s Volleyball',
    featuredImage: '/assets/images/vince-fleming-aZVpxRydiJk-unsplash.jpeg',
    url: 'https://images.unsplash.com/photo-1547347298-4074fc3086f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, iusto dolore delectus aliquam est illo consectetur iste repellendus dolores nemo odit enim nobis distinctio rerum perferendis nihil labore voluptate modi.',
  },
  {
    id: '3',
    title: 'Novak’s Late Goal Ends NIC’s Season With 1-0 Win',
    category: 'Men\'s Soccer',
    featuredImage: '/assets/images/kenny-webster-JqCpvGN0JFo-unsplash.jpeg',
    url: 'https://images.unsplash.com/photo-1518657205760-dafa7ef924de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, iusto dolore delectus aliquam est illo consectetur iste repellendus dolores nemo odit enim nobis distinctio rerum perferendis nihil labore voluptate modi.',
  },
  {
    id: '4',
    title: 'NIC Dominates The Rivalry; 109-83',
    category: 'Men\'s Basketball',
    featuredImage: '/assets/images/markus-spiske-oXS1f0uZYV4-unsplash (1).jpg',
    url: 'https://images.unsplash.com/photo-1518657205760-dafa7ef924de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, iusto dolore delectus aliquam est illo consectetur iste repellendus dolores nemo odit enim nobis distinctio rerum perferendis nihil labore voluptate modi.',
  },
  {
    id: '5',
    title: 'NIC Dominates The Rivalry; 1-7',
    category: 'Women\'s Soccer',
    featuredImage: '/assets/images/leah-hetteberg-zJZGNkmXf_E-unsplash.jpg',
    url: 'https://images.unsplash.com/photo-1518657205760-dafa7ef924de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, iusto dolore delectus aliquam est illo consectetur iste repellendus dolores nemo odit enim nobis distinctio rerum perferendis nihil labore voluptate modi.',
  },
  //   {
  //     id: '4',
  //     title: 'Soccer kicks off spring at HIGHLAND Field tonight',
  //     category: 'Ice Hockey',
  //     featuredImage: 'url',
  //     content:
  //       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, iusto dolore delectus aliquam est illo consectetur iste repellendus dolores nemo odit enim nobis distinctio rerum perferendis nihil labore voluptate modi.',
  //   },
];
