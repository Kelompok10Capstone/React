import { FormControl, InputGroup } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";

const Search = ({placeholder, value, onChange}) => {
    return(
        <div className="search">
            <InputGroup className="py-3">
            <InputGroup.Text
              style={{ backgroundColor: "transparent", borderRight: "none" }}
            >
              <BsSearch />
            </InputGroup.Text>
            <FormControl
              placeholder={placeholder}
              value={value}
              onChange={onChange}
              aria-label="Search"
              name="search"
              style={{ borderLeft: "none" }}
            />
          </InputGroup>
        </div>
    )
}

export default Search;