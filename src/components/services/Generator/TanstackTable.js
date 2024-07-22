import {Box} from "@chakra-ui/react";
import { useState,useEffect} from "react";
import { flexRender, getCoreRowModel, useReactTable} from "@tanstack/react-table";
import { useGenerator } from "@/providers/GeneratorProvider";
import EditableCell from "./EditableCell";
import EditableNameCell from "./EditableNameCell";
import { Image,Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'

const columns = [
    {
        accessorKey: 'name',
        size: 200,
        header: "Name",
        cell: EditableNameCell
    },
    {
        accessorKey: 'description',
        header: "Description",
        cell: EditableCell
    },
    {
        accessorKey: 'symbol',
        header: "Symbol",
        cell: EditableCell
    },
    {
        accessorKey: 'edition',
        header: "Edition",
        cell: EditableCell
    },
    {
        accessorKey: 'royalties',
        header: "Royalties",
        cell: EditableCell
    },
    {
        accessorKey: 'identifier',
        header: "Identifier",
        cell: EditableCell
    },
    {
        accessorKey: 'image1',
        header: "Image 1",
        cell: EditableCell
    },
    {
        accessorKey: 'image2',
        header: "Image 2",
        cell: EditableCell
    },
    {
        accessorKey: 'image3',
        header: "Image 3",
        cell: EditableCell
    },
    {
        accessorKey: 'attribute1',
        header: "Attribute 1",
        cell: EditableCell
    },
    {
        accessorKey: 'attribute2',
        header: "Attribute 2",
        cell: EditableCell
    },
    {
        accessorKey: 'attribute3',
        header: "Attribute 3",
        cell: EditableCell
    },
    {
        accessorKey: 'attribute4',
        header: "Attribute 4",
        cell: EditableCell
    },
    {
        accessorKey: 'attribute5',
        header: "Attribute 5",
        cell: EditableCell
    },
    {
        accessorKey: 'attribute6',
        header: "Attribute 6",
        cell: EditableCell
    },
    {
        accessorKey: 'attribute7',
        header: "Attribute 7",
        cell: EditableCell
    },
    {
        accessorKey: 'attribute8',
        header: "Attribute 8",
        cell: EditableCell
    },
    {
        accessorKey: 'listingMode',
        header: "ListingMode",
        cell: EditableCell
    },{
        accessorKey: 'price',
        header: "Price",
        cell: EditableCell
    },
    {
        accessorKey: 'offerPrice',
        header: "Offer Price",
        cell: EditableCell
    },
    {
        accessorKey: 'auctionEnd',
        header: "Auction End",
        cell: EditableCell
    }
]

const TanstackTable = () => {
    

    const {
        metadata,
        setMetadata,
        csvData,
        setCsvData,   
        nftImages, 
      } = useGenerator();
    const [data, setData] = useState(metadata)
    const [imageID, setImageID] = useState(0)
    const [selectedFiles, setSelectedFiles] = useState(nftImages);
        const table = useReactTable({
        data,
        columns,
        getCoreRowModel : getCoreRowModel(),
        columnResizeMode: "onChange",
        meta:{
            updateData: (rowIndex, columnId, value) => {
            setImageID(rowIndex);
            setData((prev) => 
            
            prev.map((row, index) => 
                index === rowIndex 
                    ? {
                        ...prev[rowIndex],
                        [columnId]: value,
                    }
                    : row
            
            
        )
        
    )}
        }
    })
    const renderPhotos = (source) => {
        return source.map((photo) => {
          return <Image boxSize='100px'
            objectFit='cover' src={photo} alt="" key={photo} />;
        });
      };
    console.log("Header:",table.getHeaderGroups());
    console.log("Header:",table);
    console.log("Row:",table.getRowModel())
    console.log("imageID", imageID)
    console.log("Data",data);
    useEffect(() => {
        // Update the document title using the browser API
        setMetadata(data)
        console.log("metaData:" , metadata);
        console.log("imageID", imageID);
      }, [data]);

      useEffect(() => {
        // Update the document title using the browser API
        console.log("imageID", imageID);
      }, [imageID]);
    return <div>
        {/* <div>{"imageID: " + imageID}</div> */}
        {/* <Card>
        <CardBody>
        <div className="result">
        {renderPhotos(selectedFiles)}
        <style jsx>{`
        .result{
        min-height: 100%;
        max-height: auto;
        width: 100%;
        
        margin-top:1rem ;
         display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: left; 

      }
      `}</style>
      </div>
      </CardBody>
      </Card> */}
        {/* <Image boxSize='100px'  objectFit='cover' src={nftImages[imageID]}></Image> */}
        <Box>
        <Box className="table" w={table.getTotalSize()}>
            {table.getHeaderGroups().map((headerGroup) =>(
                <Box className="tr" key={headerGroup.id}>
                    {headerGroup.headers.map((header)=>(
                        <Box className="th" w={header.getSize()} key={header.id}>
                            {header.column.columnDef.header}
                            <Box 
                            onMouseDown={header.getResizeHandler()}
                            onTouchStart={header.getResizeHandler()}
                            className={`resizer ${
                                header.column.getIsResizing() ? "isResizing" : ""}`}></Box>
                        </Box>
                    ))
                }</Box>
            ))}
            {
                table.getRowModel().rows.map((row) => (<Box className="tr" key={row.id}>
                    {row.getVisibleCells().map((cell) => 
                    (<Box className="td" w={cell.column.getSize()} key={cell.id}>
                        {
                            flexRender(cell.column.columnDef.cell,cell.getContext())
                        }
                    </Box>))}
                </Box>))
            }
        </Box>
    </Box>
    </div>;
};
export default TanstackTable;