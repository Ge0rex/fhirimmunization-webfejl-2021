import { Reaction } from '../models/reaction.model';

export const REACTIONS: Reaction[] = [
    {
        id: '1',
        reactiondate: new Date('2013-07-16'),
        detail: 'Abnormal coughing',
        reported: true,
    },
    {
        id: '2',
        reactiondate: new Date('2020-11-29'),
        detail: 'Inability to breathe properly',
        reported: true,
    },
    {
        id: '3',
        reactiondate: new Date('2001-08-27'),
        detail: 'Severe stomach aches',
        reported: true,
    },
    {
        id: '4',
        reactiondate: new Date('2021-02-05'),
        detail: 'Dizziness',
        reported: false,
    }
  ];
