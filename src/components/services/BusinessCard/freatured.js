import { useRef, useState } from "react";

const Featured  = ( {featuredSections, setFeatured, featuredContent, key, indexNum, handleDeleteSection}) => {

  const contentId = useRef(1);
  console.log("new feature sections:", featuredSections, setFeatured, featuredContent, key, indexNum)
  const onFileChangeCapture = ( e ) => {
    /*Selected files data can be collected here.*/
    console.log(e.target.files);
  };
  function onBtnClick() {
    /*Collecting node-element and performing click*/
    inputFileRef.current.click();
  }
  function addNewTextContent () {
    // let  newSections = [...featuredSections];
    // console.log("newSections:", newSections , "key", key);
    // newSections[featuredContent.key].content.push({
    //   contentType: 'text',
    //   value: null,
    // })
    // setFeatured(newSections)
    let newFeaturedSections = [...featuredSections];
    const arrNum = newFeaturedSections.findIndex((featureSection) => featureSection.id === featuredContent.id);
    newFeaturedSections[arrNum].content.push({contentType: "text", value: null, id: contentId.current})
    contentId.current++;
    setFeatured(newFeaturedSections);
    console.log("featuredSections",featuredSections);
    console.log("featuredContent", featuredContent)
  }
  function addNewEmbed () {
    let newFeaturedSections = [...featuredSections];
    const arrNum = newFeaturedSections.findIndex((featureSection) => featureSection.id === featuredContent.id);
    newFeaturedSections[arrNum].content.push({contentType: "embedMedia", value: null, id: contentId.current})
    contentId.current++;
    setFeatured(newFeaturedSections);
    console.log("featuredSections",featuredSections);
    console.log("featuredContent", featuredContent)
  }
  function handleDeleteContent(id)  {
    let newFeaturedContent =  featuredContent.content.filter(content => content.id != id )
    console.log(newFeaturedContent);
    let newFeaturedSections = [...featuredSections];
    const arrNum = newFeaturedSections.findIndex((featureSection) => featureSection.id === featuredContent.id);
    newFeaturedSections[arrNum].content = newFeaturedContent;
    setFeatured(newFeaturedSections);

  }
  //   function dataURLtoFile(dataurl, filename) {
  //     var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
  //         bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
  //     while(n--){
  //         u8arr[n] = bstr.charCodeAt(n);
  //     }
  //     return new File([u8arr], filename, {type:mime});
  // }
  const refContainer01 = useRef(null);
  const refContainer02 = useRef(null);
  const refContainer03 = useRef(null);
  const refContainer04 = useRef(null);
  const inputFileRef = useRef(null);
  // function deleteSection(){
  //   console.log(featuredContent.key);
  //   const newSections =  [...featuredSections]
  //   console.log(newSections )
  //   const trueNew = newSections.filter((newSection) => {
  //     console.log("newSection.key !== featuredContent.key", newSection.key, featuredContent.key)
  //     if(newSection.key != featuredContent.key){
  //       return true
  //     }
  //   })
  //   console.log("trueNew:", trueNew)
  //   setFeatured(trueNew)
  // }
  function editSectionTitle (e) {
    let newFeaturedSections = [...featuredSections];
    const arrNum = newFeaturedSections.findIndex((featureSection) => featureSection.id === featuredContent.id);
    newFeaturedSections[arrNum].title = e.target.value;
    setFeatured(newFeaturedSections);
  }
return (
    
      <div class="flex flex-col w-full mt-6 bg-gray-800 rounded">
    <div class="flex justify-between">
      <div class="flex items-center w-full">
        <div
          class="p-1 shrink-0 focus:outline-none drag cursor-move"
          tabindex="-1"
        >
          <div
            class="w-6 h-6"
           
          ></div>
        </div>
        <div class="w-full">
          <input
            class="px-4 w-full h-12 bg-transparent placeholder-gray-600 transition-colors duration-200 border-b border-black focus:outline-none focus:border-gray-500 hover:border-gray-500"
            type="text"
            name="section title"
            placeholder="Section title"
            autocapitalize="words"
            title="Type your own section title"
            ref={refContainer01}
            value={featuredContent.title}
            onChange={editSectionTitle}
          />
        </div>
      </div>
      <button
        class="p-1 m-2 shrink-0 focus:outline-none rounded hover:bg-gray-700 focus:bg-gray-700 transition-colors duration-200"
        aria-label="Remove section"
        title="Remove section"
        onClick={()=> {handleDeleteSection(featuredContent.id)}}
      >
        <div
          class="w-6 h-6"
         
        ></div>
      </button>
    </div>
    <div
            class="flex items-center mt-2"
           
          >
            <button
              class="p-1 shrink-0 focus:outline-none drag cursor-move"
              tabindex="-1"
            >
              <div
                class="w-6 h-6"
                // src="require(`~/assets/icons/drag.svg?include`)"
              ></div>
            </button>
            <img
              class="w-12 h-12 rounded-l object-contain shrink-0 bg-gray-700"
            />
            <a
        
              class="w-12 h-12 bg-gray-900 flex items-center justify-center text-center text-xs rounded-l shrink-0 leading-none select-none cursor-pointer"
              target="_blank"
              href="https://duckduckgo.com/?q=Add+ID3+tags+to+mp3+file"
            >
            </a>
            <div class="w-full">
              <input
                class="px-4 w-full h-12 bg-black placeholder-gray-600 rounded-r border border-transparent transition-colors duration-200 focus:outline-none focus:border-gray-500 hover:border-gray-500"
                type="text"
                aria-label="Media title"
                autocapitalize="words"
                title="Media title"
              ref={refContainer02}
                placeholder="Media title"
              />
            </div>
            <button
              class="p-1 m-2 self-end shrink-0 focus:outline-none rounded hover:bg-gray-700 focus:bg-gray-700 transition-colors duration-200"
            
              aria-label="Remove media"
              title="Remove media"
            >
              <div
                class="w-6 h-6"
               
              ></div>
            </button>
          </div>
          <div
            class="flex items-center mt-2"
        
          >
            <button
              class="p-1 shrink-0 focus:outline-none drag cursor-move"
              tabindex="-1"
            >
              <div
                class="w-6 h-6"
               
              ></div>
            </button>
            <div class="w-full">
              <textarea
                class="block px-4 py-3 w-full bg-black rounded border border-transparent placeholder-gray-600 transition-colors duration-200 focus:outline-none focus:border-gray-500 resize-none hover:border-gray-500"
                ref={refContainer03}
                aria-label="Enter text here"
                title="Enter text here"
                placeholder="Enter text here"
                rows="5"
              ></textarea>
            </div>
            <button
              class="p-1 m-2 shrink-0 focus:outline-none rounded hover:bg-gray-700 focus:bg-gray-700 transition-colors duration-200"
             
              aria-label="Remove text"
              title="Remove text"
            >
              <div
                class="w-6 h-6"
              ></div>
            </button>
          </div>
          <div class="flex items-center mt-2" >
            <button
              class="p-1 shrink-0 focus:outline-none drag cursor-move"
              tabindex="-1"
            >
              <div
                class="w-6 h-6"
              ></div>
            </button>
            <div class="w-full">
              <input
                class="px-4 w-full h-12 bg-black placeholder-gray-600 rounded border border-transparent transition-colors duration-200 focus:outline-none focus:border-gray-500 hover:border-gray-500"
               ref={refContainer04}
                type="text"
                aria-label="Paste embed code here"
                title="Paste embed code here"
                placeholder="Paste embed code here"
              />
            </div>
            <button
              class="p-1 m-2 shrink-0 focus:outline-none rounded hover:bg-gray-700 focus:bg-gray-700 transition-colors duration-200"
             
              aria-label="Remove field"
              title="Remove field"
            >
              <div
                class="w-6 h-6"
              ></div>
            </button>
          </div> 
          {/* <div
            class="flex items-center mt-2"
           
          >
            <button
              class="p-1 shrink-0 focus:outline-none drag cursor-move"
              tabindex="-1"
            >
              <div
                class="w-6 h-6"
                // src="require(`~/assets/icons/drag.svg?include`)"
              ></div>
            </button>
            <img
              class="w-12 h-12 rounded-l object-contain shrink-0 bg-gray-700"
            />
            <a
        
              class="w-12 h-12 bg-gray-900 flex items-center justify-center text-center text-xs rounded-l shrink-0 leading-none select-none cursor-pointer"
              target="_blank"
              href="https://duckduckgo.com/?q=Add+ID3+tags+to+mp3+file"
            >
            </a>
            <div class="w-full">
              <input
                class="px-4 w-full h-12 bg-black placeholder-gray-600 rounded-r border border-transparent transition-colors duration-200 focus:outline-none focus:border-gray-500 hover:border-gray-500"
                type="text"
                aria-label="Media title"
                autocapitalize="words"
                title="Media title"
              ref={refContainer02}
                placeholder="Media title"
              />
            </div>
            <button
              class="p-1 m-2 self-end shrink-0 focus:outline-none rounded hover:bg-gray-700 focus:bg-gray-700 transition-colors duration-200"
            
              aria-label="Remove media"
              title="Remove media"
            >
              <div
                class="w-6 h-6"
               
              ></div>
            </button>
          </div>
          <div
            class="flex items-center mt-2"
        
          >
            <button
              class="p-1 shrink-0 focus:outline-none drag cursor-move"
              tabindex="-1"
            >
              <div
                class="w-6 h-6"
               
              ></div>
            </button>
            <div class="w-full">
              <textarea
                class="block px-4 py-3 w-full bg-black rounded border border-transparent placeholder-gray-600 transition-colors duration-200 focus:outline-none focus:border-gray-500 resize-none hover:border-gray-500"
                ref={refContainer03}
                aria-label="Enter text here"
                title="Enter text here"
                placeholder="Enter text here"
                rows="5"
              ></textarea>
            </div>
            <button
              class="p-1 m-2 shrink-0 focus:outline-none rounded hover:bg-gray-700 focus:bg-gray-700 transition-colors duration-200"
             
              aria-label="Remove text"
              title="Remove text"
            >
              <div
                class="w-6 h-6"
              ></div>
            </button>
          </div>
          <div class="flex items-center mt-2" >
            <button
              class="p-1 shrink-0 focus:outline-none drag cursor-move"
              tabindex="-1"
            >
              <div
                class="w-6 h-6"
              ></div>
            </button>
            <div class="w-full">
              <input
                class="px-4 w-full h-12 bg-black placeholder-gray-600 rounded border border-transparent transition-colors duration-200 focus:outline-none focus:border-gray-500 hover:border-gray-500"
               ref={refContainer04}
                type="text"
                aria-label="Paste embed code here"
                title="Paste embed code here"
                placeholder="Paste embed code here"
              />
            </div>
            <button
              class="p-1 m-2 shrink-0 focus:outline-none rounded hover:bg-gray-700 focus:bg-gray-700 transition-colors duration-200"
            
              aria-label="Remove field"
              title="Remove field"
            >
              <div
                class="w-6 h-6"
              ></div>
            </button>
          </div> */}
        
        <div v-for="(item, i) in featured[index].content" >
        {featuredContent && featuredContent.content && featuredContent.content.map((content, index) => (
          (content.contentType === "text" ) && (
            <div
            class="flex items-center mt-2"
            key = {index}
          >
            <button
              class="p-1 shrink-0 focus:outline-none drag cursor-move"
              tabindex="-1"
            >
              <div
                class="w-6 h-6"
               
              ></div>
            </button>
            <div class="w-full">
              <textarea
                class="block px-4 py-3 w-full bg-black rounded border border-transparent placeholder-gray-600 transition-colors duration-200 focus:outline-none focus:border-gray-500 resize-none hover:border-gray-500"
                key = {index}
                aria-label="Enter text here"
                title="Enter text here"
                placeholder="Enter text here"
                rows="5"
              ></textarea>
            </div>
            <button
              class="p-1 m-2 shrink-0 focus:outline-none rounded hover:bg-gray-700 focus:bg-gray-700 transition-colors duration-200"
              onClick={()=> handleDeleteContent(content.id)}
              aria-label="Remove text"
              title="Remove text"
            >
              <div
                class="w-6 h-6"
              ></div>
            </button>
          </div>
          ) || (content.contentType === "embedMedia" ) && (
            <div class="flex items-center mt-2" >
            <button
              class="p-1 shrink-0 focus:outline-none drag cursor-move"
              tabindex="-1"
            >
              <div
                class="w-6 h-6"
              ></div>
            </button>
            <div class="w-full">
              <input
                class="px-4 w-full h-12 bg-black placeholder-gray-600 rounded border border-transparent transition-colors duration-200 focus:outline-none focus:border-gray-500 hover:border-gray-500"
               ref={refContainer04}
                type="text"
                aria-label="Paste embed code here"
                title="Paste embed code here"
                placeholder="Paste embed code here"
              />
            </div>
            <button
              class="p-1 m-2 shrink-0 focus:outline-none rounded hover:bg-gray-700 focus:bg-gray-700 transition-colors duration-200"
              onClick={()=> handleDeleteContent(content.id)}
              aria-label="Remove field"
              title="Remove field"
            >
              <div
                class="w-6 h-6"
              ></div>
            </button>
          </div> 
          )
        
        )  )}

      </div>
    <div
      class="grid grid-flow-row grid-cols-1 xs:grid-cols-2 gap-2 w-full p-2 double-grid"
    >
      <button
        class="flex items-center p-3 rounded cursor-pointer bg-gray-700 hover:bg-gray-600 focus:bg-gray-600 transition-colors duration-200 focus:outline-none"
        aria-label="Add media"
        onClick={()=> onBtnClick()}
      >
        <input
          ref={inputFileRef}
          onChange={onFileChangeCapture}
          type="file"
          accept="image/png, image/jpeg, image/gif, audio/mpeg, video/mp4, video/webm, application/pdf"
          class="hidden"
        />
        <div
          class="w-6 h-6 mr-3"
        ></div>
        <p class="leading-none">Add media</p>
      </button>
      <button
        class="flex items-center p-3 rounded cursor-pointer bg-gray-700 hover:bg-gray-600 focus:bg-gray-600 transition-colors duration-200 focus:outline-none"
        aria-label="Embed media"
        onClick={()=> addNewEmbed()}
      >
        <div
          class="w-6 h-6 mr-3"

        ></div>
        <p class="leading-none">Embed media</p>
      </button>
      <button
        class="flex items-center p-3 rounded cursor-pointer bg-gray-700 hover:bg-gray-600 focus:bg-gray-600 transition-colors duration-200 focus:outline-none"
        onClick={() => addNewEmbedContent()}
        aria-label="Add product"
      >
        <div
          class="w-6 h-6 mr-3"
        
        ></div>
        <p class="leading-none">Add product</p>
      </button>
      <button
        class="flex items-center p-3 rounded cursor-pointer bg-gray-700 hover:bg-gray-600 focus:bg-gray-600 transition-colors duration-200 focus:outline-none"
        aria-label="Add text"
        onClick={() => addNewTextContent()}
      >
        <div
          class="w-6 h-6 mr-3"

        ></div>
        <p class="leading-none text-left">Add text</p>
      </button>
    </div>
  </div>
    

)
}
export default Featured;