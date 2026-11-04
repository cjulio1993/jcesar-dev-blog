import { SITE_URL } from '@/data/shared';

export const absoluteUrl = (path: string) => new URL(path, SITE_URL).toString();

export const DEFAULT_OG_IMAGE = '/og-default.png';
