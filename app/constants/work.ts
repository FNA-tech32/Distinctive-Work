import * as THREE from "three";
import { WorkTimelinePoint } from "../types";

export const WORK_TIMELINE: WorkTimelinePoint[] = [
  {
    point: new THREE.Vector3(0, 0, 0),
    year: '2018',
    title: 'Distinctive Works',
    subtitle: 'Studio Inception',
    position: 'right',
  },
  {
    point: new THREE.Vector3(-4, -4, -3),
    year: '2020',
    title: 'WebGL & Interactive 3D',
    subtitle: 'Creative Development',
    position: 'left',
  },
  {
    point: new THREE.Vector3(-3, -1, -6),
    year: '2022',
    title: 'Design Systems & UI/UX',
    subtitle: 'Full-Stack Modern Web',
    position: 'left',
  },
  {
    point: new THREE.Vector3(0, -1, -10),
    year: '2024',
    title: 'Digital Experiences',
    subtitle: 'Global Brand Architecture',
    position: 'left',
  },
  {
    point: new THREE.Vector3(1, 1, -12),
    year: new Date().toLocaleDateString('default', { year: 'numeric' }),
    title: 'Innovating...',
    subtitle: '↓ Bespoke Creations',
    position: 'right',
  }
]