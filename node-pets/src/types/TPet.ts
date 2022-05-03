export type TPetType = 'dog' | 'cat' | 'fish';
export type TPetSex = 'Masculino' | 'Feminino';
export type TPet = {
  type: TPetType,
  image: string,
  name: string,
  color: string,
  sex: TPetSex
};
