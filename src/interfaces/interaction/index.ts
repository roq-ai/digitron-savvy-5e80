import { GetQueryInterface } from 'interfaces';

export interface InteractionInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface InteractionGetQueryInterface extends GetQueryInterface {
  id?: string;
}
