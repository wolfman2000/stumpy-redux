import NodeId from './nodes/node-id';

const fallbackNodes: NodeId[] = Object.keys( NodeId )
  .filter( ( k ) => typeof NodeId[k as any] === 'number' )
  .map( ( k ) => Number.parseInt( NodeId[k as any], 10 ) );

export { fallbackNodes };

export interface IVisitMap {
  [id: number]: boolean;
}

const fallbackVisitMap: IVisitMap = {};
export { fallbackVisitMap };
