import { Category } from '../models/category.model';

export const CATEGORIES: Category[] = [
{
    title: 'Patients',
    icon: 'personal_injury',
    value: 'patient',
    color: 'teal',
    url: '/home/patients'
},
{
    title: 'Immunizations',
    icon: 'health_and_safety',
    value: 'immunization',
    color: 'cyan',
    url: '/home/immunizations'
},
{
    title: 'Reactions',
    icon: 'note_add',
    value: 'reaction',
    color: '#c2185b',
    url: '/home/reactions'
},
{
    title: 'Performers',
    icon: 'medical_services',
    value: 'performer',
    color: '#c2185b',
    url: '/home/performers'
}
];
