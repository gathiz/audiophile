
interface CategoryWrapperProps {
    children?: React.ReactNode;
  }
  
  const CategoryContent: React.FC<CategoryWrapperProps> = (props) => {
    return (
      <div className="md:w-3/4 lg:w-2/3 xl:w-3/4 2xl:w-1/2 mt-8 p-4">
        {props.children}
      </div>
    );
  };
  
  export default CategoryContent;