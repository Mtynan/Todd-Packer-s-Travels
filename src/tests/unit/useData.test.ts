import { act, renderHook } from "@testing-library/react";
import { useData } from "../../hooks/useData";
import { IOutputData } from "../../interfaces/IOutputData";

describe("UseData", () => {
  test("should not contain optional info", () => {
    const { result } = renderHook(() => useData());
    
    act(() => {
      result.current[1](false);
    });
   
    expect(result.current[0]).not.toBe(null);
    expect(typeof result.current[0]).toBe("object");
    expect(result.current[0]?.markers).toBe(undefined);
    expect(result.current[0]?.optionalData).toBe(undefined);
    expect(typeof result.current[1]).toBe("function");
  });

 // test("should contain optional info", () => {   //JEST GOOGLE ERROR
//     const { result } = renderHook(() => useData());

//     act(() => {
//       result.current[1](true);
//     });
//     console.log(result.current[0]);
  
//   });
});
