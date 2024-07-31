export const galleryData = [
  {
    id: Math.random(),
    postImage:
      'https://plus.unsplash.com/premium_photo-1664304850376-df94a439e8f9?q=80&w=1781&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: Math.random(),
    postImage:
      'https://i.pinimg.com/736x/0c/7f/91/0c7f91d5552ee4b454636538b692e673.jpg',
  },
  {
    id: Math.random(),
    postImage:
      'https://i.pinimg.com/564x/99/f4/ba/99f4bad033142e4efeb2a388f4502990.jpg',
  },
  {
    id: Math.random(),
    postImage:
      'https://i.pinimg.com/736x/c2/b0/c4/c2b0c4ffe0721d213444e9cd04dc6c8f.jpg',
  },
  {
    id: Math.random(),
    postImage:
      'https://i.pinimg.com/564x/fa/a7/70/faa770a60730e06684265469c09bbb31.jpg',
  },
  {
    id: Math.random(),
    postImage:
      'https://i.pinimg.com/564x/bf/2a/0b/bf2a0bb7521bdb779198c0f7bf303f23.jpg',
  },
  {
    id: Math.random(),
    postImage:
      'https://i.pinimg.com/736x/8d/4c/14/8d4c14d8c057c35a455a24b2ab73385d.jpg',
  },
];

export interface gallertDataProps {
  posts: post[];
}

export type post = {
  id: number;
  postImage: string;
};
