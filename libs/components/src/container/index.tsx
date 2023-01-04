import classNames from 'classnames';

const Container = ({ children, className }: any) => {
  return (
    <div
      className={classNames(
        `max-w-2xl mx-auto lg:max-w-[1432px] px-6`,
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
