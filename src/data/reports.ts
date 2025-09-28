import type { WorkTermReport } from '../types/report';

import oraclenetsuiteSummer2025 from './reports/oraclenetsuite-summer2025.json';
import sapWinter2025 from './reports/sap-winter2025.json';
import ncrvoyixSummer2024 from './reports/ncrvoyix-summer2024.json';
import ncrvoyixFall2023 from './reports/ncrvoyix-fall2023.json';
import ncrcorporationSummer2023 from './reports/ncrcorporation-summer2023.json';
import blackberryqnxSummer2022 from './reports/blackberryqnx-summer2022.json';

export const reports: WorkTermReport[] = [
  oraclenetsuiteSummer2025 as WorkTermReport,
  sapWinter2025 as WorkTermReport,
  ncrvoyixSummer2024 as WorkTermReport,
  ncrvoyixFall2023 as WorkTermReport,
  ncrcorporationSummer2023 as WorkTermReport,
  blackberryqnxSummer2022 as WorkTermReport,
];