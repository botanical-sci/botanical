const Container = ({ children, paddingOnDesktop }: any) => {
  return <div className={`container mx-auto ${paddingOnDesktop ? 'md:px-4 lg:px-4' : 'px-4'}`}>{children}</div>;
};

export default Container;
